import React, { useState} from 'react'
import TaskIcon from '@mui/icons-material/Task';



  

const Tabl = (props) => {

   

        const rows = props.rowdata;

 

    const [isMinimized, setIsMinimized] = useState(false);
    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
    };
    return (
        <div className=" my-4  border-blue-500 border-1 bg-white ">
            <div
                className="flex  items-center justify-between bg-blue-500  py-2 px-3 cursor-pointer  "
                onClick={handleMinimize}
            >
                <div className="flex items-center text-white mx-2">
                    {<TaskIcon />}
                    <div className="font-medium py-2 mx-2">{props.name}</div>
                </div>
                <div className="text-white">{isMinimized ? "+" : "-"}</div>
            </div>
            {!isMinimized && (
                   <div className='m-4'>
                   <table className='w-full  border border-gray-200    text-center'>
                       <thead className=' bg-gray-900 text-white   '>
                           <tr >
                               <th className='py-2'>Serial No</th>
                               <th>Name</th>
                               <th>Email</th>
                               <th>Roll Num</th>
                               <th>Section</th>
       
                              
       
                           </tr>
                       </thead>
                       <tbody>
                           {rows?.map((item, index) => (
                               < tr key={item._id} className={`${index % 2 === 0 ? "bg-gray-200" : ""}   `} >
                                   <td>{index + 1}</td>
                                   <td>{item.name}</td>
                                   <td>{item.email}</td>
                                   <td>{item.rollNum}</td>
                                   <td>{item.section}</td>
       
                                  
                               </tr>
                           ))
                           }
       
       
                       </tbody>
                   </table>
               </div >
            )}

        </div>
    )
}

export default Tabl
