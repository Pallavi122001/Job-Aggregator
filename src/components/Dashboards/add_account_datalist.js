import React, { useEffect, useState } from 'react';
import '../Dashboards/add_account_datalist.css';

function AccountDatalist({ acc_members, acc_handleEdit, acc_handleDelete }) {
  // Maintain a state for the members, and initialize it with data from local storage
  const [acc_localMembers] = useState(() => {
    const acc_localData = localStorage.getItem('acc_members');
    return acc_localData ? JSON.parse(acc_localData) : acc_members;
  });

  // Update local storage whenever the localMembers state changes
  useEffect(() => {
    localStorage.setItem('acc_members', JSON.stringify(acc_localMembers));
  }, [acc_localMembers]);

  return (
    <div>
      <table className="addAccounttable">
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
          <th>Actions</th>
          </tr>
          <br></br>
        </thead>
        <tbody>
          {acc_localMembers.length > 0 ? (
            acc_localMembers.map((acc_Member, i) => (
              <tr key={acc_Member.ID}>
                <td>{i + 1}</td>
                <td>{acc_Member.acc_Name}</td>
                <td>{acc_Member.acc_pass}</td>
                <td>{acc_Member.com_Acc_pass}</td>
                <td>{acc_Member.acc_email}</td>
                <td>{acc_Member.acc_date}</td>
                <td>{acc_Member.acc_contact}</td>
                <td>{acc_Member.acc_address}</td>
                <td>{acc_Member.acc_city}</td>
                <td>{acc_Member.acc_state}</td>
                <td className="edit-delete-button">
                  <button onClick={() => acc_handleEdit(acc_Member.ID)} className="Edit-button1">
                    Edit
                  </button>
                  <button onClick={() => acc_handleDelete(acc_Member.ID)} className="Delete-button1">
                    Delete
                  </button>
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

export default AccountDatalist;