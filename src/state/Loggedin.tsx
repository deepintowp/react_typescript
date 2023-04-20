import React, { useState } from 'react'

const Loggedin = () => {
  const [isLoggedIn, setIsLoggedin] =   useState(false)
  const handleLogout = () =>{
    setIsLoggedin(false)
  }
  const handleLogin = () =>{
    setIsLoggedin(true)
  }
  
  return (
    <div>
        <button onClick={handleLogin}  >login</button>
        <button onClick={handleLogout}>logout</button>
        <div>user is {isLoggedIn ? "Logged in ":"Logged out"}</div>
    </div>
  )
}

export default Loggedin