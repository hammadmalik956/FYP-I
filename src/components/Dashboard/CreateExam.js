import { React, useState } from 'react'

import TaskIcon from '@mui/icons-material/Task';
import { useAddStudentMutation } from '../../services/nodeApi';
const CreateExam = () => {
    const [addStudent] = useAddStudentMutation();
    const [isMinimized, setIsMinimized] = useState(true);
    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const roomColD = ['RoomID', 'Building', 'Floor'];

    return (
        <div className=' h-screen'>
            <h1 className=' text-xl font-sans border-r border-blue-400 py-2 w-[5rem] my-2'>Exams</h1>
            <div className=" m-4 border-blue-500 border-1 bg-white h-50 ">

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

            </div>
           
        </div>
    )
}

export default CreateExam
