import React, { useEffect, useState } from 'react';
import '../Dashboards/adddatalist.css';

function AddDatalist({ members, handleEdit, handleDelete }) {
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
            <th>S No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Profile</th>
            <th>Actions</th>
          </tr>
          <br></br>
        </thead>
        <tbody>
          {localMembers.length > 0 ? (
            localMembers.map((Member, i) => (
              <tr key={Member.id}>
                <td>{i + 1}</td>
                <td>{Member.firstName}</td>
                <td>{Member.lastName}</td>
                <td>{Member.email}</td>
                <td>{Member.branch}</td>
                <td>{Member.date}</td>
                <td>{Member.contact}</td>
                <td>{Member.profile}</td>
                <td className="edit-delete-button">
                  <button onClick={() => handleEdit(Member.id)} className="Edit-button">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(Member.id)} className="Delete-button">
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

export default AddDatalist;
