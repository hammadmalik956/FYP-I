import React, { useRef, useState, useEffect } from 'react';
import * as faceapi from 'face-api.js'
import { useAddPresentStudentMutation } from '../../services/nodeApi';

const MarkAttendance = () => {
  const videoHeight = 480;
  const videoWidth = 600;
  const [isMinimized, setIsMinimized] = useState(false);

  const [initializing, setInitializing] = useState(false);
  const [database, setDatabase] = useState({});
  const videoRef = useRef();
  const canvasRef = useRef();

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/models';
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = () => {
  
    navigator.getUserMedia(
      {
        video: {},
      },
      (stream) => {
        videoRef.current.srcObject = stream;
        setInitializing(false);
      },
      (error) => console.error(error)
    );
   
  };


  const handleVideoOnPlay = async () => {
    if (initializing) {
      setInitializing(false);
    }

    const displaySize = { width: videoWidth, height: videoHeight };
    faceapi.matchDimensions(canvasRef.current, displaySize);

    const detections = await faceapi.detectSingleFace(
      videoRef.current,
      new faceapi.TinyFaceDetectorOptions()
    ).withFaceLandmarks().withFaceDescriptor();

    if (detections) {
      const faceDescriptor = detections.descriptor.toString();

      for (const [studentName, studentDescriptor] of Object.entries(database)) {
        const distance = faceapi.euclideanDistance(studentDescriptor, faceDescriptor);
        if (distance < 0.6) { // adjust threshold as necessary
          // mark attendance for the student
          console.log(`Attendance marked for ${studentName}`);
          break;
        }
      }
    }

    faceapi.draw.drawDetections(canvasRef.current, detections);
    faceapi.draw.drawFaceLandmarks(canvasRef.current, detections);

    requestAnimationFrame(handleVideoOnPlay);
  };
  const handleTrainButtonClick = async () => {
    const studentName = prompt('Enter the name of the student:');
    if (studentName) {
      const detections = await faceapi.detectSingleFace(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceLandmarks().withFaceDescriptor();

      if (detections) {
        const faceDescriptor = detections.descriptor.toString();
        setDatabase({ ...database, [studentName]: faceDescriptor });
        console.log(`Face descriptor for ${studentName}:`, faceDescriptor);
      } else {
        alert('No face detected. Please try again.');
      }
    }
  };

  const handleTakeAttendanceClick = async () => {
    const displaySize = { width: videoWidth, height: videoHeight };
    faceapi.matchDimensions(canvasRef.current, displaySize);
    const labeledDescriptors = Object.entries(database).map(([label, descriptor]) =>
      new faceapi.LabeledFaceDescriptors(label, [Float32Array.from(descriptor.split(',').map(Number))])
    );
    if (labeledDescriptors.length > 0) {
      const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);

      setInterval(async () => {
        if (initializing) {
          setInitializing(false);
        }
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptors();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
        const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));
        results.forEach((result, i) => {
          const box = resizedDetections[i].detection.box;
          const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() });
          drawBox.draw(canvasRef.current);
          if (result._label !== 'unknown') {
            console.log(`Attendance marked for ${result._label}`);
          }
        });
      }, 100);
    } else {
      alert('No student data found. Please train the model first.');
    }
  };



  return (

    <div className=" my-4  border-blue-500 border-1 bg-white ">
      <div
        className="flex  items-center justify-between bg-blue-500  py-2 px-3 cursor-pointer  "
        onClick={handleMinimize}
      >
        <div className="flex items-center text-white mx-2">
          
          <div className="font-medium py-2 mx-2">Take Attendance</div>
        </div>
        <div className="text-white">{isMinimized ? "+" : "-"}</div>
      </div>
      {!isMinimized && (
      <div className='p-2'>
      <div className='flex justify-center'>
        <video className='rounded' ref={videoRef} autoPlay muted height={videoHeight} width={videoWidth} />
        <canvas ref={canvasRef} className='absolute' />
      </div>
      <div className='flex justify-center mt-4'>
        <button onClick={handleTrainButtonClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded'>
          Train Model</button>
        <button onClick={handleTakeAttendanceClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Mark Attendance</button>
      </div>
      </div>
      )}
      
    </div>
  );


};

export default MarkAttendance;
