import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import AddDatalist_Jobs from './addalldatalist_upload_job';
import AddAlledit_Job from './addalledit_upload_job';
import Add_Job from './addall_upload_job';
import { AllData } from '../../Data/AllDatas';
import './add_applicant.css';
import './addAdminheader.css';

const UploadJob = () => {
  const [jobs, job_set] = useState([]);
  const [job_selectedMember, setSelectedMember] = useState(null);
  const [job_isAdding, job_setIsAdding] = useState(false);
  const [job_isEditing, job_setIsEditing] = useState(false);

  // Load the members data from local storage when the component mounts
  useEffect(() => {
    const JobstoredMembers = JSON.parse(localStorage.getItem('jobs'));
    if (JobstoredMembers) {
        job_set(JobstoredMembers);
    } else {
        job_set(AllData);
    }
  }, []);

  // Save members data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const job_handleEdit = (i_d) => {
    const job = jobs.find((job) =>job.i_d === i_d);
    setSelectedMember(job);
    job_setIsEditing(true);
  }

  const job_handleDelete = (i_d) => {
    console.log("Deleting member with ID:", i_d);
    Swal.fire({
      icon: 'warning',
      title: "Are You Sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, Cancel!',
    }).then((result) => {
      if (result.value) {
        console.log("Confirmed deletion of member with ID:", i_d);
        const updatedJobs = jobs.filter((job) => job.i_d !== i_d);
        console.log("Updated members:", updatedJobs);
        job_set(updatedJobs);
      }
    });
  };
  
  return (
    <React.Fragment>
      <header>
        <button onClick={() => job_setIsAdding(true)} className='round-button'>Add New Jobs</button>
        <a href="/logout"><button className='logout-button'>Logout</button></a>
        <div className='container2'>
          {!job_isAdding && !job_isEditing && (
            <AddDatalist_Jobs
              jobs={jobs}
              job_handleEdit={job_handleEdit}
              job_handleDelete={job_handleDelete}
            />
          )}
          {job_isAdding && (
            <Add_Job
              jobs={jobs}
              job_set={job_set}
              job_setIsAdding={job_setIsAdding}
            />
          )}
          {job_isEditing && (
            <AddAlledit_Job
               jobs={jobs}
               job_selectedMember={job_selectedMember}
              job_set={job_set}
              job_setIsEditing={job_setIsEditing}
            />
          )}
        </div>
      </header>
    </React.Fragment>
  )
}

export default UploadJob 
