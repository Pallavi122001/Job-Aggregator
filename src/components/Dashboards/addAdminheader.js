import './addAdminheader.css'
import React from "react";
  const  Addadminheader= () => {
  return (
    <header>
    <div className='adminheader'>
    <div class="content2">
    <h2>Job Aggregator</h2>
    <h2>Job Aggregator</h2>
  </div>
            <br></br>
            <span className="heading3">
              A complete solution for managing Jobs,Companies and job Seekers
            </span>
            <br></br><br></br>
          </div>
        <hr></hr>
        <br></br>
      <div className="buttons1">
      <a href="/"><button>Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a><br></br>
      <a href="/add_applicant"><button>Add Applicant &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a><br></br>
      <a href="/findjob"><button>Find Job &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a><br></br>
      <a href="/add_upload_job"><button>Upload Job &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a><br></br>
      <a href="/add_company"><button>Add Company &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a><br></br>
      <a href="/applicant_report"><button>Applicant Report&nbsp;&nbsp;</button></a><br></br>
      <a href="/company_report"><button>Company Report&nbsp;&nbsp;&nbsp;&nbsp;</button></a><br></br>
      <a href="/changePass"><button>Change Password</button></a><br></br>
      <a href="/logout"><button>Logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a>
          </div>
      </header>
    );
        };
export default Addadminheader;
