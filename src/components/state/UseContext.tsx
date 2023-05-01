import React, { createContext, useState } from "react"

export type AuthUser = {
    name:string,
    email:string
}
type userContextType = {
    user:AuthUser | null
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderProps = {
    children:React.ReactNode
}
export const userContext = createContext<userContextType |null >(null)
export const UserContextProvider = ({children}:UserContextProviderProps)=>{
   const [user, setUser] = useState<AuthUser | null>(null)
   return <userContext.Provider value={{user, setUser}} >{children}</userContext.Provider>
}