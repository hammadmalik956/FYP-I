import React ,{useState} from 'react'
import ExamTable from './ExamTable';
import TaskIcon from '@mui/icons-material/Task';


const ViewExamIn = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
       
    };

  return (
    <div>
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
                    <ExamTable />
                    
                )}
               
            </div>
    </div>
  )
}

export default ViewExamIn
