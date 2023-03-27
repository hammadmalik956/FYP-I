import React from 'react'
import './sidebox.css'

import Lottie from 'lottie-react';
const SideBox = (props) => {
  return (
    <div className="side_box">
      <div className="description">
        <Lottie animationData={props.animation} />
        {/* <img src={require(`./../../img/${props.image}`)} className="img-fluid" alt='fiximg' /> */}
        <div className="side_main_content">
          <p className="heading text-center mx-auto font-semibold pb-4">{props.heading}</p>
          <p className="sub_heading text-center mx-auto">{props.subHeading}</p>
          <img src={require("./../../img/Group 615.png")} className="img-fluid pop_img" alt='popImg' />
        </div>
      </div>

    </div>

  )
}

export default SideBox