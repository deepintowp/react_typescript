import React, {useContext} from 'react'
import { userContext } from './UseContext'

const User2 = () => {
  const UserContext = useContext(userContext)
  const handleLogout = ()=>{
    if(UserContext){
      UserContext.setUser(null)
    }
  }
const handleLogin = ()=>{
  if(UserContext){
    UserContext.setUser({
      name:"Subho",
      email:"deepintowp@gmail.com"
    })
  }
}
  return (
    <div className='fhjfj' >
        <button onClick={handleLogin} >Login</button>
        <br />
        <button onClick={handleLogout}>Logout</button>
        <div>
          ghcdgh
            Username is:{UserContext?.user?.name}
            Username is:{UserContext?.user?.email}
        </div>
    </div>
  )
}

export default User2