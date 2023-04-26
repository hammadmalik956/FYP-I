import React, { useState, useEffect } from 'react'
import { useGetAllExamsQuery } from '../../services/nodeApi'
import { Link } from 'react-router-dom';



const ExamTable = () => {
    const { data, isLoading } = useGetAllExamsQuery();
    const [tabData, setTabData] = useState([]);
    const userType = localStorage.getItem("userType");

    useEffect(() => {
        // get data from database 

        if (isLoading === false) {
            const newData = data?.result?.map(item => {
                const date = new Date(item.examDate); // create a new Date object from the timestamp
                const year = date.getFullYear();
                const month = ("0" + (date.getMonth() + 1)).slice(-2); // add leading zero to month if needed
                const day = ("0" + date.getDate()).slice(-2); // add leading zero to day if needed
                const formattedDate = `${year}-${month}-${day}`; // format the date as YYYY-MM-DD
                return { ...item, examDate: formattedDate }; // update the date field in the item with the formatted date
            });

            setTabData(newData);
            
        }
       

    },[data, isLoading]);

    return (
        <div className='m-4'>
            <table className='w-full  border border-gray-200 text-smal   text-center'>
                <thead className=' bg-gray-900 text-white   '>
                    <tr >
                        <th className='px-4 py-2'>Serial No</th>
                        <th>Exam Name</th>
                        <th>Exam Code</th>
                        <th>Exam Type</th>
                        <th>Date</th>

                        {(userType === 'invg') && <th>Start</th>}
                        <th>View</th>

                    </tr>
                </thead>
                <tbody>
                    {tabData?.map((item, index) => (
                        < tr key={item._id} className={`${index % 2 === 0 ? "bg-gray-200" : ""}   `} >
                            <td>{index + 1}</td>
                            <td>{item.examName}</td>
                            <td>{item.examCode}</td>
                            <td>{item.examType}</td>
                            <td>{item.examDate}</td>

                            {(userType === 'invg') && <td className='py-2'><Link to={`/dashboard/sexam/${item._id}`}>
                                <button className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                                    Start
                                </button>
                            </Link></td>}
                            <td className='py-2' ><Link to={`/dashboard/vexam/${item._id}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    View
                                </button>
                            </Link></td>
                        </tr>
                    ))
                    }


                </tbody>
            </table>
        </div >
    )
}

export default ExamTable
