import { React, useState } from 'react'
import TableExp from './TableExp'
import TaskIcon from '@mui/icons-material/Task';
import { useAddStudentMutation } from '../../services/nodeApi';
const ViewExam = () => {
    const [addStudent] = useAddStudentMutation();
   

    const roomColD = ['RoomID', 'Building', 'Floor'];

    return (
        <div className=' h-screen'>
            <h1 className=' text-xl font-sans border-r border-blue-400 py-2 w-[8rem] my-2'>View Exam</h1>
           
            <TableExp tname="Exams" headIcon={<TaskIcon />} column={roomColD} mutfun={addStudent} />

        </div>
    )
}

export default ViewExam
