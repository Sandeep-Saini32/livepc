import { Route, Routes } from "react-router-dom"


import { Home } from "./home"
import { Login } from "./login"
import { Signup } from "./signup"


export const Routerr=()=>{

  return(

  

  <>
 
  <Routes>
<Route path="/" element={<Home/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
  </Routes>
  
  </>  

  )
}