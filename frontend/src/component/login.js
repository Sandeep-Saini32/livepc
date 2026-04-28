import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login=()=>{

const navigate=useNavigate() 

const [loginemail,setloginemail]=useState("")
const [loginpass,setloginpass]=useState("")



// const{setusertype,setid}=useContext(Usercontext)

const check=async(e)=>{
    e.preventDefault()

const logindata={loginemail,loginpass}

const save=await fetch("https://livepc-1-mrya.onrender.com/api/loginpage",{
method:"post",
body:JSON.stringify(logindata),
headers:{
    "content-type":"application/json;charset=UTF-8"
}

})


    const sv= await save.json()
if(sv.statuscode===1){
 
    // localStorage.setItem("realname",sv.name)
alert("login successful")
navigate("/")

}


else{
    alert("incorect info")
}


};

// else{
//     // alert("error")
//     Swal.fire({
//   title: 'Error',
//   text: 'Wrong info',
//   icon: 'error',
//   confirmButtonText: 'Okay'
// })

// }

// }


return(
    <>
    
    <h1>login</h1>

<form onSubmit={check}>
   
    
<div>

 <input type="email"onChange={(e)=>setloginemail(e.target.value)} placeholder="enter email"></input>
    <input type="passwoed" onChange={(e)=>setloginpass(e.target.value)}placeholder="password"></input>

 <button onClick={check}>login</button>

</div>

   
</form>

    </>
)


}