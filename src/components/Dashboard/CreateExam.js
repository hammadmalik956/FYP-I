import { React, useState } from 'react'
import TaskIcon from '@mui/icons-material/Task';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';
import { Form, Input, DatePicker, Select } from 'antd';
import Selector from './Utils/Selector';
import { useSnackbar } from 'notistack';
import { useCreateExamMutation } from '../../services/nodeApi';
const { Option } = Select;






const CreateExam = () => {
    const [form] = Form.useForm();
    //geting data 
    const InvgilatorData = useSelector(
        (state) => state.invg
    );
    const RoomData = useSelector(
        (state) => state.room
    );
    const StudentData = useSelector(
        (state) => state.student
    );

    //console.log(InvgilatorData.InvgData.result);

    // console.log(StudentData.StudData.result);

    const rooms = RoomData?.RoomData?.result;
    const invgilators = InvgilatorData?.InvgData?.result;
    const rollNumbers = StudentData?.StudData?.result;

    const [selectedRollNumbers, setSelectedRollNumbers] = useState([]);

    const onSelect = rollNumber => {
        if (selectedRollNumbers.includes(rollNumber)) {
            setSelectedRollNumbers(selectedRollNumbers.filter(num => num !== rollNumber));
        } else {
            setSelectedRollNumbers([...selectedRollNumbers, rollNumber]);
        }

    };


    //end of selector 
    const [examData] = useCreateExamMutation();
    const { enqueueSnackbar } = useSnackbar();

    const onFinish = async (values) => {
        values.allotedStudents = selectedRollNumbers;


        try {


            const { data, error } = await examData(values);
            if (data) {
                console.log(data);
                enqueueSnackbar(data.message, { variant: "success" });
                form.resetFields(); // reset the form fields

            } else {
                enqueueSnackbar(error.data.message, { variant: "error" });
            }
        } catch (e) {
            console.log(e);
        }

    };




    const [isMinimizedE, setIsMinimizedE] = useState(false);
    const [isMinimizedV, setIsMinimizedV] = useState(false);
    const handleMinimize = () => {
        setIsMinimizedE(!isMinimizedE);
        setIsMinimizedV(isMinimizedE);
    };



    return (
        <div className=' h-screen'>
            <h1 className=' text-xl font-sans border-r border-blue-400 py-2 w-[5rem] my-2'>Exams</h1>
            <div className=" m-4 border-blue-500 border-1 bg-white  ">

                <div
                    className="flex  items-center justify-between bg-blue-500  py-2 px-3 cursor-pointer "
                    onClick={handleMinimize}
                >
                    <div className="flex items-center text-white mx-2">
                        {<TaskIcon />}
                        <div className="font-medium py-2 mx-2">Create Exam</div>
                    </div>
                    <div className="text-white">{isMinimizedE ? "+" : "-"}</div>
                </div>
                {!isMinimizedE && (<div className='m-4'>
                    <div className=' w-full'>
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
                        {/* main Section form */}
                        <div className='my-4    p-4  shadow-gray-900 shadow-sm  font-semibold'>
                            <Form form={form} onFinish={onFinish} >
                                <div className='flex flex-wrap justify-between   '>
                                    <Form.Item name="examName" label="Name of Exam" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name="examCode" label="Course Code of Exam" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>

                                    <Form.Item name="serialNo" label="Serial No" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </div>
                                <div className=' flex  justify-between  '>
                                    <Form.Item name="examType" label="Type of Exam" rules={[{ required: true }]} className='w-64' >
                                        <Select >
                                            <Option value="Sessional I">Sessional I </Option>
                                            <Option value="Sessional II">Sessional II </Option>
                                            <Option value="Final">Final </Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name="examDuration" label="Duration of Exam" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name="examDate" label="Date" rules={[{ required: true }]}>
                                        <DatePicker />
                                    </Form.Item>
                                </div>
                                <div className='flex  justify-between'>
                                    <Form.Item name="allotedInvigilator" label="Course Invigilator" rules={[{ required: true }]} className='w-80'>
                                        <Select>
                                            {invgilators.map((instructor) => (
                                                <Option key={instructor._id} value={instructor._id}>
                                                    {instructor.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>

                                    <Form.Item name="allotedStudents" label="Students" >
                                        <Selector rollNumbers={rollNumbers}
                                            selectedRollNumbers={selectedRollNumbers}
                                            onSelect={onSelect} />
                                    </Form.Item>

                                </div>
                                <Form.Item name="room" label="Room" rules={[{ required: true }]}>
                                    <Select>
                                        {rooms.map((room) => (
                                            <Option key={room._id} value={room._id}>
                                                {room.roomID}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <div className='flex justify-between' >
                                    <Form.Item name="startTime" label="Start Time" rules={[{ required: true }]}>
                                        <DatePicker showTime />
                                    </Form.Item>
                                    <Form.Item name="endTime" label="End Time" rules={[{ required: true }]}>
                                        <DatePicker showTime />
                                    </Form.Item>
                                </div>
                                <div className='flex justify-end'>
                                    <Form.Item>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>)}
            </div>

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
                    <div className="text-white">{isMinimizedV ? "+" : "-"}</div>
                </div>
                {!isMinimizedV && (
                    <h1>
                        hello
                    </h1>
                )}
            </div>
        </div>
    )
}


export default CreateExam
