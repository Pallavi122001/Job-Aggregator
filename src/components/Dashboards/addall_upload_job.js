import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './addall.css';

function Add_Job({ jobs, job_set, job_setIsAdding }) {

  const [job_email, job_setEmail] = useState('');
  const [job_date, job_setDate] = useState('');
  const [job_contact, job_setContact] = useState('');
  const [job_type, set_job_type] = useState('');
  const [job_description, set_job_description] = useState('');
  const [job_Qualification, set_Qualification] = useState('');
  const [job_Duration, set_Duration] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const job_handleAdd = (e3) => {
    e3.preventDefault();
    if (!job_email || !job_date || !job_contact || !job_type || !job_description || !job_Qualification || !job_Duration) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All Fields are required.',
        showConfirmButton: true,
      });
    }

    const i_d = jobs.length + 1;
    const job_newMember = {
      i_d,
      job_email,
      job_date,
      job_contact,
      job_type,
      job_description,
      job_Qualification ,
      job_Duration
    };

    // Add the new member to the members array
    const job_updated = [...jobs, job_newMember];
    job_set(job_updated);

    // Save the updated members array to local storage
    localStorage.setItem('jobs', JSON.stringify(job_updated));

    job_setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: `${job_type}${job_description}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='smallcontainer'>
      <form onSubmit={job_handleAdd}>
      <label>
        Job Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="job_email"
          value={job_email}
          ref={textInput}
          onChange={(e3) => job_setEmail(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Posted Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="date"
          id="job_date"
          value={job_date}
          ref={textInput}
          onChange={(e3) => job_setDate(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Contact:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value={job_contact}
          ref={textInput}
          onChange={(e3) => job_setContact(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Job Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value={job_type}
          ref={textInput}
          onChange={(e3) => set_job_type(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Job Description:&nbsp;&nbsp;
        <input
          type="text"
          value={job_description}
          ref={textInput}
          onChange={(e3) => set_job_description(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Job Qualification:  
        <input
          type="text"
          value={job_Qualification}
          ref={textInput}
          onChange={(e3) => set_Qualification(e3.target.value)}
        />
      </label>
<br></br>
      <label>
        Job Duration: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value={job_Duration}
          ref={textInput}
          onChange={(e3) => set_Duration(e3.target.value)}
        />
      </label>
      <div>
      <input type="submit" value="Add"/>
          <input classname="muted-button" type="button" value="cancel" onClick={()=>job_setIsAdding(false)}/>
          </div>
      </form>
    </div>
  );
}

export default Add_Job;
