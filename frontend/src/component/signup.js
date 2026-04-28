import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signup=()=>{
 
    const navigate=useNavigate()
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [pass ,setpass]=useState("")



const add=async(e)=>{
    e.preventDefault()

   



const data={email,pass,name}

const show=await fetch("http://localhost:9000/api/signup",{

    method:"post",
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json;charset=utf-8"
    }
})

if(show.ok){
    const sh=await show.json()
    if(sh.statuscode===1){
alert("your register is done")
navigate("/login") 

    }
    else{
        alert("data not stored")
    }

}
else{
    alert("error")
}

}


return(
<>


<h1>signup</h1>

<form onSubmit={add}>
   
   <div>


    <input type="text" onChange={(e)=>setname(e.target.value)} placeholder="name"></input>
    <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder="enter email"></input>
    <input type="password" onChange={(e)=>setpass(e.target.value)}placeholder="password"></input>

<button onClick={add}>enter</button>

</div>

</form>
</>

)


}