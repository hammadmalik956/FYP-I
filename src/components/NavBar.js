import React from 'react'

const NavBar = () => {
    console.log(JSON.parse(localStorage.getItem("user")))

   
    const userType = localStorage.getItem("userType");
    console.log(userType)

    return (
        <div>

        </div>
    )
}

export default NavBar
