import React from 'react'
import { useParams } from 'react-router-dom';
const ViewExam = () => {
  const { id } = useParams(); // get the id from the url id of particular exam
  console.log(id)
  return (
    <div>
        <h1>Exam View Page</h1>
      <p>Exam ID: {id}</p>
    </div>
  )
}

export default ViewExam
