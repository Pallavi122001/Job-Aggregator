import React ,{useState}from "react";
import "./jobseeker_register.css"
import axios from 'axios';
const JobSeekerRegister=()=>{
    const[user,setUser]=useState({
            name:"",
            email:"",
            password:"",
            ConfirmPassword:""
    })
    
    const handleChange= e =>{
        const{name,value}=e.target;
        setUser({
           ...user,
           [name] :value
        })
    }
    // register process
    const jobseekerregister=()=>{
        const {name,email,password,ConfirmPassword}=user
        // for validation
        if(name && email && password && (password===ConfirmPassword)){
        axios.post("http://localhost:3008/adminregister",user)
        .then(res=>alert(res.data.message))
        }
        else{
            alert("invalid input")
        }
    }

    return(
        <body>
        <div className="register1">
        <h1>Job Seeker Register</h1><br></br>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input><br></br>
        <input type="tel" name="mobile" placeholder="Mobile" required onChange={handleChange} /><br></br>
        <input type="text"  name="email" value={user.email}  placeholder="Your Email " onChange={handleChange}></input><br></br>
        <input type="password"  name="password" value={user.password } placeholder="Your Password" onChange={handleChange}></input><br></br>
        <input type="password"  name="ConfirmPassword" value={user.ConfirmPassword} placeholder="ConfirmPassword" onChange={handleChange}></input><br></br>
<div className="registerbutton" onClick={jobseekerregister}>Register</div>
        </div>
        </body>
    )
}
export default JobSeekerRegister