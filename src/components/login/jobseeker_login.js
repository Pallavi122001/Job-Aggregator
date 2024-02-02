import { useState } from "react";
import React from "react";
import "./jobseeker_login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const JobSeekerLogin=({setLoginUser})=>{
    const history = useHistory()

    const[user,setUser]=useState({
        email:"",
        password:"",
})

const handleChange=e=>{
    const{name,value}=e.target;
    setUser({
       ...user,
       [name] :value
    })
}
const jobseekerlogin=()=>{
axios.post("http://localhost:3008/adminlogin",user)
.then(res=>{
    alert(res.data.message)
    setLoginUser(res.data.user)
history.push("/jobseekerheader")
}
)
}
    return(
        <body>
        <div className="login">
        <h1> Job Seeker Login</h1><br></br>
        <input type="text"      name="email" value={user.email}  placeholder="Your Email " onChange={handleChange}></input><br></br>
        <input type="password"  name="password" value={user.password } placeholder="Your Password" onChange={handleChange}></input><br></br>
        <div className="loginbutton" type="submit" onClick={jobseekerlogin}>Login</div>
        </div>
        </body>
    )
}
export default JobSeekerLogin