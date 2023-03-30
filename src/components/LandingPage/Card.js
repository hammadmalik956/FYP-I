import React from 'react'

const Card=( props ) => {
  return (
    <div className=" rounded-md py-4 bg-gray-800 text-white  bg-opacity-80 mx-auto" style={{ width: '20rem' }}>
      <img src={require( `./../../img/${props.img}` )} className="mx-auto" style={{ width: 60 }} alt="flex img" />
      <div className="px-5 pt-4">
        <h5 className=" fw-bold mb-3" style={{ fontSize: 17 }}>{props.heading}</h5>
        <small className="card-text">{props.description}</small>
      </div>
    </div>
  )
}

export default Card