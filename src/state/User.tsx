import React, { useState } from 'react'
type authUser = {
    name:string,
    email:string
}
const User = () => {
    const [user, setUser] =  useState<authUser | null >({} as authUser) //Type assertion
    const handleLogin = () =>{
        setUser({
            name:"Subhasish Manna",
            email:"deepintowp@gmail.com"
        })
    }
    
  return (
    <div>
        <button onClick={handleLogin} >Login</button>
        
        <div>
            <p>Name:{user?.name}</p>
            <p>Email:{user?.email}</p>
        </div>

    </div>
  )
}

export default User