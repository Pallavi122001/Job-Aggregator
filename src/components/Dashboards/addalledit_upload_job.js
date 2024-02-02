import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './addalledit.css';

function AddAlledit_Job({ jobs, job_selectedMember , job_set, job_setIsEditing }) {
  const i_d = job_selectedMember.i_d;
  const [job_email, job_setEmail] = useState(job_selectedMember.job_email);
  const [job_date, job_setDate] = useState(job_selectedMember.job_date);
  const [job_contact, job_setContact] = useState(job_selectedMember.job_contact);
  const [job_type, set_job_type] = useState(job_selectedMember.job_type);
  const [job_description, set_job_description] = useState(job_selectedMember.job_description);
  const [job_Qualification, set_Qualification] = useState(job_selectedMember.job_Qualification);
  const [job_Duration, set_Duration] = useState(job_selectedMember.job_Duration);

  useEffect(() => {
    // Populate the form with the selectedMember data
    job_setEmail(job_selectedMember.job_email);
    job_setDate(job_selectedMember.job_date);
    job_setContact(job_selectedMember.job_contact);
    set_job_type(job_selectedMember.job_type);
    set_job_description(job_selectedMember.job_description);
    set_Qualification(job_selectedMember.job_Qualification);
    set_Duration(job_selectedMember.job_Duration);
  }, [job_selectedMember]);

  const job_handleUpdate = (e3) => {
    e3.preventDefault();
    if (!job_email || !job_date || !job_contact || !job_type || !job_description || !job_Qualification || !job_Duration) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All Fields are required.',
        showConfirmButton: true,
      });
    }

    const job_updated= {
        i_d,
        job_email,
        job_date,
        job_contact,
        job_type,
        job_description,
        job_Qualification ,
        job_Duration
    };

    // Update the member in the members array
    const updatedJobs = jobs.map((job) =>
      job.i_d === i_d ? job_updated : job
    );

    job_set(updatedJobs);

    // Save the updated members array to local storage
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));

    job_setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated',
      text: `${job_type} ${job_description}'s data has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={job_handleUpdate}>
      <label>
        Job Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="jobemail"
          value={job_email}
          onChange={(e3) => job_setEmail(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="date"
          id="jobdate"
          value={job_date}
          onChange={(e3) => job_setDate(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Contact:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="jobcontact"
          value={job_contact}
          onChange={(e3) => job_setContact(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Job Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value={job_type}
          onChange={(e3) => set_job_type(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Job Description:&nbsp;&nbsp;
        <input
          type="text"
          value={job_description}
          onChange={(e3) => set_job_description(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Job Qualification:
        <input
          type="text"
          value={job_Qualification}
          onChange={(e3) => set_Qualification(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Job Duration:
        <input
          type="text"
          value={job_Duration}
          onChange={(e3) => set_Duration(e3.target.value)}
        />
      </label>
        <div className='submit-input'>
        <input type="submit" value="update"/>
      <input className='muted-button' type="button" value="cancel" onClick={()=> job_setIsEditing(false)}/>
      </div>
      </form>
    </div>
  );
}

export default AddAlledit_Job;
