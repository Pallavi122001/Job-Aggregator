import React from 'react';
import "./selectregisterrole.css"
const SelectRegisterrole=()=>{
    return (
        <React.Fragment>
        <h1 className='selectrole'>Select Role Of Registration</h1>
        <div class="button-container1">
        <a href="/adminregister"><button className='adminbutton'>Register as Admin</button> </a>
        <a href="/jobseeker_register"><button className='facultybutton'>Register as Job Seeker</button> </a>
    </div>
        </React.Fragment>
    );

};

export default SelectRegisterrole