import React from 'react'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const SideNavBar = () => {
    const location = useLocation();
    const userType = localStorage.getItem("userType");
    return (
        <div className=" w-[14rem] h-[100vh]  fixed  font-sans bg-gray-900 z-10  float-left  ">
            <aside className='flex items-center flex-col  h-full '>
                <div className="flex h-[4rem] w-full  items-center px-10 border-b border-r border-blue-500 ">
                    {/* logo */}
                    <h1 className='  text-white  text-xl '>SmartVision</h1>

                </div>
                <div className='flex  flex-col gap-y-1 pt-4 mb-[48vh] w-full px-2  text-white'>

                    <Link className={`flex mb-2 justify-start items-center  py-2 px-3 hover:bg-white  rounded-md group  hover:shadow-lg ${location.pathname.endsWith("dashboard") ? " bg-white text-blue-500" : ''} `} to='/dashboard'>


                        <DashboardCustomizeRoundedIcon className='text-2xl group-hover:text-blue-500  ' />
                        <h1 className=' mx-2 text-base group-hover:text-blue-500 font-semibold'>Dashboard</h1>
                    </Link>
                    {(userType === "admin") &&
                        <Link className={`flex mb-2 justify-start items-center  py-2 px-3  hover:bg-white  rounded-md group  hover:shadow-lg ${location.pathname.endsWith("createresource") ? " bg-white text-blue-500" : ''}`} to='/dashboard/createresource'>


                            <AddIcon className='text-2xl  group-hover:text-blue-500' />
                            <h1 className=' mx-2 text-base  group-hover:text-blue-500 font-semibold'>Create Resource</h1>
                        </Link>
                    }
                    {(userType === "admin") &&
                        <Link className={`flex mb-2 justify-start items-center  py-2 px-3  hover:bg-white  rounded-md group  hover:shadow-lg ${location.pathname.endsWith("exam") ? " bg-white text-blue-500" : ''}`} to='/dashboard/exam'>


                            <AddIcon className='text-2xl  group-hover:text-blue-500' />
                            <h1 className=' mx-2 text-base  group-hover:text-blue-500 font-semibold'>Exams</h1>
                        </Link>
                    }

                    {(userType === "invg") &&
                        <Link className={`flex mb-2 justify-start items-center  py-2 px-3  hover:bg-white  rounded-md group  hover:shadow-lg ${location.pathname.endsWith("viewexams") ? " bg-white text-blue-500" : ''}`} to='/dashboard/viewexams'>


                            <AddIcon className='text-2xl  group-hover:text-blue-500' />
                            <h1 className=' mx-2 text-base  group-hover:text-blue-500 font-semibold'>View Exams</h1>
                        </Link>
                    }
                </div>
                {/* Setting tag */}
                <div className=" mt-24 border-b border-blue-500 pb-4 w-full px-4 ">
                    <Link to='/dashboard/settings' className='text-white'  >
                        <div className={`flex mb-1   justify-start items-center gap-2 pl-5  hover:bg-white py-2 px-3 rounded-md group cursor-pointer hover:shadow-lg  ${location.pathname.endsWith("settings") ? " bg-white text-blue-500" : ''} `}>
                            <SettingsIcon className="text-2xl  group-hover:text-blue-500 " />
                            <h3 className="text-base  group-hover:text-blue-500 font-semibold ">
                                Settings
                            </h3>
                        </div>
                    </Link>


                </div>
            </aside>
        </div>
    )
}

export default SideNavBar
