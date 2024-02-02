import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AllData } from '../../Data/AllDatas';
import AddCompanyEdit from './addalledit1';
import AddDatalist1 from './adddatalist1';
import Add_com from './addall1';
import './add_applicant.css';
import './addAdminheader.css';

const Add_Company = () => {
  const [com_members, com_setMembers] = useState([]);
  const [com_selectedMember, com_setSelectedMember] = useState(null);
  const [com_isAdding, com_setIsAdding] = useState(false);
  const [com_isEditing, com_setIsEditing] = useState(false);

  // Load the members data from local storage when the component mounts
  useEffect(() => {
    const com_storedMembers = JSON.parse(localStorage.getItem('com_members'));
    if (com_storedMembers) {
      com_setMembers(com_storedMembers);
    } else {
      com_setMembers(AllData);
    }
  }, []);

  // Save members data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('com_members', JSON.stringify(com_members));
  }, [com_members]);

  const com_handleEdit = (iD) => {
    const com_member = com_members.find((com_member) => com_member.iD === iD);
    com_setSelectedMember(com_member);
    com_setIsEditing(true);
  }

  const com_handleDelete = (iD) => {
    console.log("Deleting member with ID:", iD);
    Swal.fire({
      icon: 'warning',
      title: "Are You Sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, Cancel!',
    }).then((result) => {
      if (result.value) {
        console.log("Confirmed deletion of member with ID:", iD);
        const com_updatedMembers = com_members.filter((com_member) => com_member.iD !== iD);
        console.log("Updated members:", com_updatedMembers);
        com_setMembers(com_updatedMembers);
      }
    });
  };
  
  return (
    <React.Fragment>
      <header>
        <button onClick={() => com_setIsAdding(true)} className='round-button'>Add New Company</button>
        <a href="/logout"><button className='logout-button'>Logout</button></a>
        <div className='container2'>
          {!com_isAdding && !com_isEditing && (
            <AddDatalist1
              com_members={com_members}
              com_handleEdit={com_handleEdit}
              com_handleDelete={com_handleDelete}
            />
          )}
          {com_isAdding && (
            <Add_com
              com_members={com_members}
              com_setMembers={com_setMembers}
              com_setIsAdding={com_setIsAdding}
            />
          )}
          {com_isEditing && (
            <AddCompanyEdit
              com_members={com_members}
              com_selectedMember={com_selectedMember}
              com_setMembers={com_setMembers}
              com_setIsEditing={com_setIsEditing}
            />
          )}
        </div>
      </header>
    </React.Fragment>
  )
}

export default Add_Company;