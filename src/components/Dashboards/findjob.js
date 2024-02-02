import React, { useState, useEffect } from 'react';
import './findjob.css';
import Swal from 'sweetalert2';
import AddDatalist_Jobs from './addalldatalist_upload_job';
import AddAlledit_Job from './addalledit_upload_job';
import Add_Job from './addall_upload_job';
import { AllData } from '../../Data/AllDatas';

const FindJob = () => {
  const [jobs, job_set] = useState([]);
  const [job_selectedMember, setSelectedMember] = useState(null);
  const [job_isAdding, job_setIsAdding] = useState(false);
  const [job_isEditing, job_setIsEditing] = useState(false);

  // Add state variables for filter options
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('');

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
    const job = jobs.find((job) => job.i_d === i_d);
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
  const handleAddJob = (jobData) => {
    // Update the jobs state with the new job data
    const updatedJobs = [...jobs, jobData];
    job_set(updatedJobs);
  
    // Save the updated jobs array to local storage
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };
  
  // Create a function to filter jobs based on selected options
  const filterJobs = () => {
    let filteredJobs = AllData;

    if (selectedDate) {
      filteredJobs = filteredJobs.filter(job => job.datePosted === selectedDate);
    }

    if (selectedJobType) {
      filteredJobs = filteredJobs.filter(job => job.jobType === selectedJobType);
    }

    if (selectedEducationLevel) {
      filteredJobs = filteredJobs.filter(job => job.educationLevel === selectedEducationLevel);
    }

    job_set(filteredJobs);
  };

  return (
    <>
      <header>
        <div className='find_job'>
          <h1>Find a Job</h1>
          <br></br>
          <label htmlFor='datePosted'>Date Posted:</label>
          <select id='datePosted' onChange={(e) => setSelectedDate(e.target.value)}>
            <option value=''>Select Date</option>
            <option value='10/11/2023'>10/11/2023</option>
            <option value='15/12/2023'>15/12/2023</option>
            <option value='23/12/2023'>23/12/2023</option>
            <option value='14/1/2024'>14/1/2024</option>
            <option value='15/2/2024'>15/2/2024</option>
          </select>

          <label htmlFor='jobType'>&nbsp;&nbsp;Job Type:</label>
          <select id='jobType' onChange={(e) => setSelectedJobType(e.target.value)}>
            <option value=''>Select Job Type</option>
            <option value='Cloud engineer'>Cloud engineer</option>
            <option value='UI Designer'>UI Designer</option>
            <option value='Data Analyst'>Data Analyst</option>
            <option value='Software Trainer'>Software Trainer</option>
            <option value='Full Stack Developer'>Full Stack Developer</option>
          </select>

          <label htmlFor='educationLevel'>&nbsp;&nbsp;Education Level:</label>
          <select id='educationLevel' onChange={(e) => setSelectedEducationLevel(e.target.value)}>
            <option value=''>Select Education Level</option>
            <option value='Under Graduated'>Under Graduated</option>
            <option value='Graduated'>Graduated</option>
            <option value='Post Graduated'>Post Graduated</option>
          </select>


          <button className='findjobbtn' onClick={filterJobs}>Search</button>
          <a href="/logout"><button className='findjobbtn'>Logout</button></a>
        </div>
        <div className='jobpost_container'>
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
        </div>
      </header>
    </>
  );
};

export default FindJob;