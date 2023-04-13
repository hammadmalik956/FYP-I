import React from 'react'
import TableExp from './TableExp'
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useAddStudentMutation } from '../../services/nodeApi';
const CreateResource = () => {
  const [addStudent] = useAddStudentMutation();
  

  const invgColD = ['Name', 'Email' ]
    const roomColD = ['RoomID', 'Building', 'Floor'];
    const studentColD = ['Name', 'Email', 'Roll Num','Section'];
  return (
    <div className=' h-screen'>
    <h1 className=' text-xl font-sans border-r border-blue-400 py-2 w-[12rem] my-2'>Create Resource</h1>
      <TableExp tname="Rooms" headIcon={<DomainAddIcon/>} column={roomColD}  mutfun ={addStudent} />
      <TableExp tname="Students" headIcon={<PeopleAltIcon/>} column={studentColD} />
      <TableExp tname="Invigilators" headIcon={<AccountCircleIcon/>} column={invgColD} />
     
    </div>
  )
}

export default CreateResource
