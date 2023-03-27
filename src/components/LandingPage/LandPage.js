import React from 'react'

const landing = () => {
  return (
    <>
    <div className=' bg-hero bg-cover h-screen w-full ' >
     
       
          <nav className='flex py-3 w-full items-center shadow-md  rounded-md   fixed '>
            {/* logo */}
            <div className='px-4 mx-4'>
              SmartVision
            </div>
            {/* Links */}
            <div className='flex justify-end w-full gap-8 px-4 mx-44 items-center '  >
              <a className=' font-bold cursor-pointer hover:text-gray-800'>Home</a>
              <a className=' font-bold cursor-pointer hover:text-gray-800'>Services</a>
              <a className='font-bold cursor-pointer hover:text-gray-800'>Contact Us</a>
            </div>
            {/* login Button */}
            <button type='button' className=' mx-4 px-4 py-2 text-white text-sm font-bold bg-gray-800 rounded-md '>Login</button>
          </nav>
      
       
      
          <div>hello</div>
    </div>
    
    </>
  )
}

export default landing
