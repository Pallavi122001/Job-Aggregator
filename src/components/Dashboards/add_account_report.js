import React, { useEffect, useState } from 'react';
import '../Dashboards/adddatalist.css';

function Account_report({ members}) {
  // Maintain a state for the members, and initialize it with data from local storage
  const [localMembers] = useState(() => {
    const localData = localStorage.getItem('members');
    return localData ? JSON.parse(localData) : members;
  });

  // Update local storage whenever the localMembers state changes
  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(localMembers));
  }, [localMembers]);

  return (
    <div>
      <table className="addjobSeekertable">
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Password</th>
            <th>Confirm Pass</th>
            <th>Email</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
          </tr>
          <br></br>
        </thead>
        <tbody>
          {localMembers.length > 0 ? (
            localMembers.map((Member, i) => (
              <tr key={Member.id}>
                <td>{i + 1}</td>
                <td>{Member.acc_Name}</td>
                <td>{Member.acc_pass}</td>
                <td>{Member.com_Acc_pass}</td>
                <td>{Member.acc_email}</td>
                <td>{Member.acc_date}</td>
                <td>{Member.acc_contact}</td>
                <td>{Member.acc_address}</td>
                <td>{Member.acc_city}</td>
                <td>{Member.acc_state}</td>
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

export default Account_report;