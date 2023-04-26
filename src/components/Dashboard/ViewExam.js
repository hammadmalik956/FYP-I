import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskIcon from '@mui/icons-material/Task';
import { Divider } from '@mui/material';
import { useGetExamByIDQuery, useGetInvgByIDQuery ,useGetRoomByIDQuery ,useGetStudentByIDQuery } from '../../services/nodeApi';
import { formatDate,formatTime } from './Utils/formatDnT';
import { setSExamData } from '../../redux/singExamD';
import { useDispatch } from 'react-redux';
import Tabl from './Utils/Tabl';


const ViewExam = () => {
  const dispatch = useDispatch();

  const [isMinimized, setIsMinimized] = useState(false);
  const [examData, setExamData] = useState({});

  const { id } = useParams(); // get the id from the url id of particular exam
  const { data, isLoading } = useGetExamByIDQuery(id); // get the exam data from the backend

  useEffect(() => {
    async function fetchData() {

      if (!isLoading && data) {
        setExamData(data.result);
        dispatch(setSExamData(data.result));


      }

    }
    fetchData();
  });


  const { data: invigilator } = useGetInvgByIDQuery(examData.allotedInvigilator)
  
  const { data: room } = useGetRoomByIDQuery(examData.room)
  
  const allotedS = examData.allotedStudents;
  const allotedP = examData.presentStudents;
  const allotedC = examData.cheatingStudents;
  const { data: studentA } = useGetStudentByIDQuery(allotedS)
  const { data: studentP } = useGetStudentByIDQuery(allotedP)
  const { data: studentC } = useGetStudentByIDQuery(allotedC)
  
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };



  return (
    <div>
      <h1 className=' text-xl font-sans border-r border-blue-400 py-2 w-[8rem] my-2'>View Exam</h1>

      {/* View Exam Section */}
      <div className=" m-4 border-blue-500 border-1 bg-white  ">
        <div
          className="flex  items-center justify-between bg-blue-500  py-2 px-3 cursor-pointer "
          onClick={handleMinimize}
        >
          <div className="flex items-center text-white mx-2">
            {<TaskIcon />}
            <div className="font-medium py-2 mx-2">View Exam</div>
          </div>
          <div className="text-white">{isMinimized ? "+" : "-"}</div>
        </div>
        {!isMinimized && (
          <div className="m-4">
            {/* Heading for University */}
            <div className='flex justify-between items-center flex-col font-semibold text-xl'>
              National University of Computer and Emerging Sciences
            </div>
            <div className='flex justify-around items-center  font-semibold py-2'>
              <h1>FAST School of Computing</h1>
              <h1>Spring-2023</h1>
              <h1>Islamabad Campus</h1>
            </div>
            <Divider />
            {/* Main Section  */}
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                {/* left section  */}
                <div className='flex flex-col p-3'>
                  <h1 className='font-semibold text-3xl'>{examData.examCode}: <span>{examData.examName}</span></h1>
                  <h1 className='mt-10'>{formatDate(examData.examDate)}</h1>
                  <h1 className='mt-1 font-semibold text-xl'>Course Invigilator</h1>
                  <h1 className='mt-1'>{invigilator?.result?.name}</h1>
                  <h1 className='mt-1 font-semibold'>Start Time</h1>
                  <h1 className='mt-1'>{formatTime(examData.startTime)}</h1>
                </div>
                {/* right section  */}
                <div className='flex flex-col p-3'>
                  <h1 >Serial No: <span>{examData.serialNo}</span></h1>
                  <h1 className='mt-1 font-semibold text-3xl'>{examData.examType}</h1>
                  <h1 className='mt-1 font-semibold text-xl'>Total Time: <span>{examData.examDuration}</span></h1>
                  <h1 className='mt-1 font-semibold text-xl'>Alloted Room </h1>
                  <h1 className='mt-1'>{room?.result?.roomID}</h1>
                  <h1 className='mt-1 font-semibold'>End Time</h1>
                  <h1 className='mt-1'>{formatTime(examData.endTime)}</h1>
                </div>
              </div>
              <div className='p-3' >
                  <Tabl rowdata={studentA?.result} name='Alloted Students' />
                  <Tabl rowdata={studentP?.result}  name = 'Present Students'/>
                  <Tabl rowdata={studentC?.result}  name = 'Cheating Students'/>
                </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default ViewExam
