import { React, useState } from 'react'
import TaskIcon from '@mui/icons-material/Task';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';
import { Form, Input, DatePicker, Select } from 'antd';
const { Option } = Select;

const courseInstructors = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
];

const rooms = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
    { id: 3, name: 'Room 3' },
];

const CreateExam = () => {
    const onFinish = (values) => {
        console.log(values);
    };


    const InvgilatorData = useSelector(
        (state) => state.invg
    );
    const RoomData = useSelector(
        (state) => state.room
    );
    const StudentData = useSelector(
        (state) => state.student
    );
    console.log(InvgilatorData.InvgData.result);
    console.log(StudentData.StudData.result);
    console.log(RoomData.RoomData.result);

    const [isMinimized, setIsMinimized] = useState(false);
    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
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
                    <div className="text-white">{isMinimized ? "+" : "-"}</div>
                </div>
                {!isMinimized && (<div className='m-4'>
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
                        <div className='my-4    p-4 z-10  shadow-gray-900 shadow'>
                        <Form onFinish={onFinish}>
                            <div className='flex flex-wrap justify-between  '>
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
                            <div className='flex  justify-between  '>
                            <Form.Item name="examType" label="Type of Exam" rules={[{ required: true }]}>
                                <Select >
                                    <Option value="sessionalI">Sessional I </Option>
                                    <Option value="sessionalII">Sessional II </Option>
                                    <Option value="final">Final </Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="duration" label="Duration of Exam" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                                <DatePicker />
                            </Form.Item>
                            </div>
                            <Form.Item name="instructor" label="Course Instructor" rules={[{ required: true }]}>
                                <Select>
                                    {courseInstructors.map((instructor) => (
                                        <Option key={instructor.id} value={instructor.name}>
                                            {instructor.name}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item name="studentRange" label="Students Allotted" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="room" label="Room" rules={[{ required: true }]}>
                                <Select>
                                    {rooms.map((room) => (
                                        <Option key={room.id} value={room.name}>
                                            {room.name}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item name="startTime" label="Start Time" rules={[{ required: true }]}>
                                <DatePicker showTime />
                            </Form.Item>
                            <Form.Item name="endTime" label="End Time" rules={[{ required: true }]}>
                                <DatePicker showTime />
                            </Form.Item>
                            
                            <Form.Item>
                                <button type="submit">Submit</button>
                            </Form.Item>
                        </Form>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    )
}


export default CreateExam
