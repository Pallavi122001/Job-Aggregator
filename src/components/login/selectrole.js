import React from 'react';
import "./selectrole.css"
const Selectrole=()=>{
    return (
        <React.Fragment>
        <h1 className='selectrole'>Select Role Of Login</h1>
        <div class="button-container1">
        <a href="/adminlogin"><button className='adminbutton'>Login as Admin</button> </a>
        <a href="/jobseeker_login"><button className='facultybutton'>Login as job seeker</button> </a>
    </div>
        </React.Fragment>
    );

};

export default Selectrole