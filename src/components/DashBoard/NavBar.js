import React from 'react'
import Avatar from 'react-avatar';
import ProfileImg from './img.jpeg'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const Navbar = () => {
  return (
    <div className='h-12 w-full bg-white text-black font-sans fixed z-20'>

        
      <div className="flex h-full w-full  justify-end  gap-x-4  items-center  rounded-b-xl shadow-gray-800  shadow-md ">
      {/* Description */}
      <h1 className='   mr-4  text-gray-800  font-semibold'>Dashboard</h1>
      
        {/* Notification icon */}
        <a className='   hover:bg-gray-900  rounded-md group  hover:shadow-lg ' href='#'>
          <NotificationsActiveIcon className='text-2xl text-gray-600 group-hover:text-white' />
        </a>
        {/* profile icon */}
        <Avatar className='mr-8' size="40" round={true} src={ProfileImg} />
      </div>

    </div>
  )
}

export default Navbar
