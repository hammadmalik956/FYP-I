import React from 'react'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const NavBar = () => {
    console.log(JSON.parse(localStorage.getItem("user")))

    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    const userType = localStorage.getItem("userType");
    console.log(userType)

    return (
        <nav className='  text-white fixed h-[4rem]  w-[calc(100vw_-_14rem)] right-0 font-sans bg-gray-900 z-10 border-b-2 shadow-sm flex justify-end items-center '>
            
            
            <h1 className='mx-2  hover:text-blue-500  '><span className='text-blue-500 mr-1  cursor-pointer '>Hello Mr,</span>  {user.result.name}</h1>
            <Avatar className='mr-4' size="default" icon={<UserOutlined />} />

        </nav>
    )
}

export default NavBar
