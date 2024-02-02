import React ,{useState}from "react";
import "./adminregister.css"
import axios from 'axios';
const AdminRegister=()=>{
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
    const adminregister=()=>{
        const {name,email,password="admin",ConfirmPassword}=user
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
        <h1>Admin Register</h1><br></br>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input><br></br>
        <input type="tel" name="mobile" placeholder="Mobile" required onChange={handleChange} /><br></br>
        <input type="text"  name="email" value={user.email}  placeholder="Your Email " onChange={handleChange}></input><br></br>
        <input type="password"  name="password" value={user.password } placeholder="Your Password" onChange={handleChange}></input><br></br>
        <input type="password"  name="ConfirmPassword" value={user.ConfirmPassword} placeholder="ConfirmPassword" onChange={handleChange}></input><br></br>
        <div className="registerbutton" onClick={adminregister}>Register</div>
        </div>
        </body>
    )
}
export default AdminRegister