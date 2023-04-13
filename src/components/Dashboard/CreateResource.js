import React from 'react'
import TableExp from './TableExp'
import DomainAddIcon from '@mui/icons-material/DomainAdd';

const CreateResource = () => {
    const roomColD = ['RoomID', 'Building', 'Floor'];
    const studentColD = ['Name', 'Email', 'Roll Num','Section'];
  return (
    <div className=' h-screen'>
    <h1 className=' text-xl font-sans border-r border-blue-400 py-2 w-[12rem] my-2'>Create Resource</h1>
      <TableExp tname="Rooms" headIcon={<DomainAddIcon/>} column={roomColD} />
      <TableExp tname="Students" headIcon={<DomainAddIcon/>} column={studentColD} />
     
    </div>
  )
}

export default CreateResource
