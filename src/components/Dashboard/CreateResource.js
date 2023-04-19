import React from 'react'
import TableExp from './TableExp'
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useAddStudentMutation, useAddRoomMutation,useCreateInvigilatorMutation ,useGetAllRoomsQuery,useGetAllInvigilatorsQuery,useGetAllStudentsQuery} from '../../services/nodeApi';
import {setInvgData}  from '../../redux/invgSlice';
import {setStudData}  from '../../redux/StudentSlice';
import {setRoomData}  from '../../redux/roomSlice';

const CreateResource = () => {
  // mutations for uploading to database
  const [addStudent] = useAddStudentMutation();
  const [addRoom] = useAddRoomMutation();
  const [createInvg] = useCreateInvigilatorMutation();
  const invgColD = ['name', 'email','password']
    const roomColD = ['building', 'floor','roomID'];
    const studentColD = ['name', 'email', 'rollNum','section'];
  return (
    <div className=' h-screen'>
    <h1 className=' text-xl font-sans border-r border-blue-400 py-2 w-[12rem] my-2'>Create Resource</h1>
      <TableExp tname="Rooms" headIcon={<DomainAddIcon/>} column={roomColD} mutfun ={addRoom} qurfun={useGetAllRoomsQuery()} slice ={setRoomData}/>
      <TableExp tname="Students" headIcon={<PeopleAltIcon/>} column={studentColD} mutfun ={addStudent} qurfun={useGetAllStudentsQuery()} slice ={setStudData} />
      <TableExp tname="Invigilators" headIcon={<AccountCircleIcon/>} column={invgColD} mutfun ={createInvg} qurfun={useGetAllInvigilatorsQuery()} slice ={setInvgData} />
     
    </div>
  )
}

export default CreateResource
