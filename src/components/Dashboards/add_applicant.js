import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AllData } from '../../Data/AllDatas';
import AddDatalist from './adddatalist';
import AddAlledit from './addalledit';
import Add_Application from './addall';
import './add_applicant.css';
import './addAdminheader.css';

const Add_applicant = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Load the members data from local storage when the component mounts
  useEffect(() => {
    const storedMembers = JSON.parse(localStorage.getItem('members'));
    if (storedMembers) {
      setMembers(storedMembers);
    } else {
      setMembers(AllData);
    }
  }, []);

  // Save members data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  const handleEdit = (id) => {
    const member = members.find((member) => member.id === id);
    setSelectedMember(member);
    setIsEditing(true);
  }

  const handleDelete = (id) => {
    console.log("Deleting member with ID:", id);
    Swal.fire({
      icon: 'warning',
      title: "Are You Sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, Cancel!',
    }).then((result) => {
      if (result.value) {
        console.log("Confirmed deletion of member with ID:", id);
        const updatedMembers = members.filter((member) => member.id !== id);
        console.log("Updated members:", updatedMembers);
        setMembers(updatedMembers);
      }
    });
  };
  
  return (
    <React.Fragment>
      <header>
        <button onClick={() => setIsAdding(true)} className='round-button'>Add New Applicant</button>
        <a href="/logout"><button className='logout-button'>Logout</button></a>
        <div className='container2'>
          {!isAdding && !isEditing && (
            <AddDatalist
              members={members}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
          {isAdding && (
            <Add_Application
              members={members}
              setMembers={setMembers}
              setIsAdding={setIsAdding}
            />
          )}
          {isEditing && (
            <AddAlledit
              members={members}
              selectedMember={selectedMember}
              setMembers={setMembers}
              setIsEditing={setIsEditing}
            />
          )}
        </div>
      </header>
    </React.Fragment>
  )
}

export default Add_applicant;
