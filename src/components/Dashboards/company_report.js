import React, { useEffect, useState } from 'react';
import '../Dashboards/adddatalist.css';

function Company_report({com_members}) {
  // Maintain a state for the members, and initialize it with data from local storage
  const [com_localMembers] = useState(() => {
    const com_localData = localStorage.getItem('com_members');
    return com_localData ? JSON.parse(com_localData) : com_members;
  });

  // Update local storage whenever the localMembers state changes
  useEffect(() => {
    localStorage.setItem('com_members', JSON.stringify(com_localMembers));
  }, [com_localMembers]);

  return (
    <div>
      <table className="addjobSeekertable">
        <thead>
          <tr>
          <th>S No.</th>
          <th> Company Name</th>
          <th>Company Type</th>
          <th>Company Email</th>
          <th>Date</th>
          <th>Company Contact</th>
          <th>Profile</th>
          <th>Actions</th>
          </tr>
          <br></br>
        </thead>
        <tbody>
          {com_localMembers.length > 0 ? (
            com_localMembers.map((com_Member, i) => (
              <tr key={com_Member.id}>
                <td>{i + 1}</td>
                <td>{com_Member.com_Name}</td>
                <td>{com_Member.com_type}</td>
                <td>{com_Member.com_email}</td>
                <td>{com_Member.com_date}</td>
                <td>{com_Member.com_contact}</td>
                <td>{com_Member.com_profile}</td>
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

export default Company_report;
