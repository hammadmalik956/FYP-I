import React from 'react'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import AddIcon from '@mui/icons-material/Add';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const SideBar = () => {
    return (
        <div className="flex h-screen w-1/6 font-sans bg-white z-20 fixed  ">
            <aside className=" flex   w-full  flex-col justify-start items-center      bg-white   rounded-r-xl shadow-gray-800  shadow-xl ">

                <div className="flex h-12 w-full items-center justify-center border-b border-gray-600 ">
                    {/* logo */}
                </div>
                <div className='flex flex-1 flex-col gap-y-1 pt-10  '>
                    <a className='flex mb-2 justify-start items-center  py-2 px-3  hover:bg-gray-900  rounded-md group  hover:shadow-lg ' href='#'>


                        <DashboardCustomizeRoundedIcon className='text-2xl text-gray-600 group-hover:text-white' />
                        <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Dashboard</h1>
                    </a>

                    <a className='flex mb-2 justify-start items-center  py-2 px-3  hover:bg-gray-900  rounded-md group  hover:shadow-lg ' href='#'>


                        <AddIcon className='text-2xl text-gray-600 group-hover:text-white' />
                        <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Create Sale</h1>
                    </a>
                    {/* Creating Drop Downlist  */}
                    <ul id="dropdown-example" className="    border-l-2 border-gray-600  ml-12 ">
                        <li>
                            <a className='flex justify-start items-center   py-2 px-3 text-white hover:bg-gray-900  rounded-md  group hover:shadow-lg ' href='#'>


                                <PersonAddIcon className='text-2xl text-gray-600 group-hover:text-white' />
                                <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Buyer Information </h1>
                            </a>
                        </li>
                        <li>
                            <a className='flex  justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md group  hover:shadow-lg ' href='#'>


                                <SupervisedUserCircleIcon className='text-2xl text-gray-600 group-hover:text-white' />
                                <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Gaurenter Information</h1>
                            </a>
                        </li>
                        <li>
                            <a className='flex  justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md group  hover:shadow-lg ' href='#'>


                                <AddShoppingCartIcon className='text-2xl text-gray-600 group-hover:text-white' />
                                <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Product Information </h1>
                            </a>
                        </li>
                        <li>
                            <a className='flex mb-2 justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md group  hover:shadow-lg ' href='#'>


                                <ReceiptIcon className='text-2xl text-gray-600 group-hover:text-white' />
                                <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Invoice Information</h1>
                            </a>
                        </li>


                    </ul>


                    <a className='flex my-2 justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md group  hover:shadow-lg  ' href='#'>


                        <QueryStatsIcon className='text-2xl text-gray-600 group-hover:text-white' />
                        <h3 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>View Sale</h3>
                    </a>


                </div>

                {/* setting  */}
                <div className=" mt-4 border-b-2 border-gray-600 pb-4">
                    <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-gray-900 py-2 px-3 rounded-md group cursor-pointer hover:shadow-lg ">
                        <SettingsIcon className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Settings
                        </h3>
                    </div>


                </div>

                {/* logout */}
                <div className=" my-4 ">
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-600  hover:bg-gray-900 py-2 px-3 rounded-md group cursor-pointer hover:shadow-lg ">
                        <LogoutIcon className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                            Logout
                        </h3>
                    </div>
                </div>





            </aside>
        </div>
    )
}

export default SideBar