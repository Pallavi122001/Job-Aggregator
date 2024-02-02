import React, { useState } from 'react';
import './applyjob.css';

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
    coverLetter: '',
  });

  const [applied, setApplied] = useState(false); // To track if the user has applied

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.resume || !formData.coverLetter) {
      alert('Please fill in all required fields.');
      return;
    }

    // Check if the user has already applied (you can use a unique identifier, e.g., email)
    const previousApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];

    if (previousApplications.some((application) => application.email === formData.email)) {
      alert('You have already applied for this job.');
      return;
    }

    // If not, store the application data in local storage
    const newApplications = [...previousApplications, formData];
    localStorage.setItem('jobApplications', JSON.stringify(newApplications));
    setApplied(true);
  };

  return (
    <div>
      {applied ? (
        <div>
          <p>You have successfully applied for this job.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='jobform'>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Resume (Upload):
            <input type="file" name="resume" onChange={handleChange} />
          </label>
          <br />
          <label>
            Cover Letter:
            <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} />
          </label>
          <br />
          <br />
          <button type="submit" className='submitform'>Submit Application</button>
        </form>
      )}
    </div>
  );
}

export default JobApplicationForm;
