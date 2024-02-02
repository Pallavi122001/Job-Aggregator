import React, { useEffect, useState } from 'react';
import '../Dashboards/adddatalist.css';

function jobs_report({jobs}) {
  // Maintain a state for the members, and initialize it with data from local storage
  const [localMembers] = useState(() => {
    const localData = localStorage.getItem('jobs');
    return localData ? JSON.parse(localData) : jobs;
  });

  // Update local storage whenever the localMembers state changes
  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(localMembers));
  }, [localMembers]);

  return (
    <div>
      <table className="addjobSeekertable">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Email</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Job Type</th>
            <th>job Description</th>
            <th>Job Qualification</th>
            <th>job Duration</th>
            <th>Actions</th>
          </tr>
          <br></br>
        </thead>
        <tbody>
          {localMembers.length > 0 ? (
            localMembers.map((job, i) => (
              <tr key={job.i_d}>
                <td>{i + 1}</td>
                <td>{job.job_email}</td>
                <td>{job.job_date}</td>
                <td>{job.job_contact}</td>
                <td>{job.job_type}</td>
                <td>{job. job_description}</td>
                <td>{job.job_Qualification}</td>
                <td>{job.job_Duration}</td>
                <td className="edit-delete-button">
                 <a href="/logout"> <button className="Edit-button">
                    Logout
                  </button></a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>No Members</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default jobs_report;