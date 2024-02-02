import React from 'react'
import '../Dashboards/jobseekerheader.css'
const JobSeekertheader = ({setIsAdding}) => {
    return (
      <header>
      <div className='job_header'>
      <div class="content1">
      <h2>Job Aggregator</h2>
      <h2>Job Aggregator</h2>
    </div>
            <br></br>
            <span className="heading4">
              A complete solution for managing Jobs,Companies and job Seekers
            </span>
            <br></br><br></br>
          </div>
          <hr></hr>
          <br></br>
        <div className="buttons2">
        <a href="/"><button>Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </button></a>
        <a href="/company_report"><button>Companies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</button></a>
        <a href="/add_upload_job"><button>All Jobs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a>
        <a href="/add_my_account"><button>My Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a>
        <a href="/contactform"><button>Contact Us &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a>
        <a href="/changePass"><button>  Change Password</button></a>
        <a href="/logout"><button>Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></a>
            </div>
        </header>
      );
}

export default JobSeekertheader
