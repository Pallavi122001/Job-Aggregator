import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AllData } from '../../Data/AllDatas';
import AccountDatalist from './add_account_datalist';
import Account_edit from './edit_account';
import Add_Account_Data from './addall_account';
import './add_applicant.css';
import './addAdminheader.css';

const Add_my_account = () => {
  const [acc_members, acc_setMembers] = useState([]);
  const [acc_selectedMember, acc_setSelectedMember] = useState(null);
  const [acc_isAdding, acc_setIsAdding] = useState(false);
  const [acc_isEditing, acc_setIsEditing] = useState(false);

  // Load the members data from local storage when the component mounts
  useEffect(() => {
    const acc_storedMembers = JSON.parse(localStorage.getItem('acc_members'));
    if (acc_storedMembers) {
      acc_setMembers(acc_storedMembers);
    } else {
      acc_setMembers(AllData);
    }
  }, []);

  // Save members data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('acc_members', JSON.stringify(acc_members));
  }, [acc_members]);

  const acc_handleEdit = (ID) => {
    const acc_member = acc_members.find((acc_member) => acc_member.ID === ID);
    acc_setSelectedMember(acc_member);
    acc_setIsEditing(true);
  }

  const acc_handleDelete = (ID) => {
    console.log("Deleting member with ID:", ID);
    Swal.fire({
      icon: 'warning',
      title: "Are You Sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, Cancel!',
    }).then((result) => {
      if (result.value) {
        console.log("Confirmed deletion of member with ID:", ID);
        const acc_updatedMembers = acc_members.filter((acc_member) => acc_member.ID !== ID);
        console.log("Updated members:", acc_updatedMembers);
        acc_setMembers(acc_updatedMembers);
      }
    });
  };
  
  return (
    <React.Fragment>
      <header>
        <button onClick={() => acc_setIsAdding(true)} className='round-button'>Add My Account</button>
        <a href="/logout"><button className='logout-button'>Logout</button></a>
        <div className='container2'>
          {!acc_isAdding && !acc_isEditing && (
            <AccountDatalist
              acc_members={acc_members}
              acc_handleEdit={acc_handleEdit}
              acc_handleDelete={acc_handleDelete}
            />
          )}
          {acc_isAdding && (
            <Add_Account_Data
              acc_members={acc_members}
              acc_setMembers={acc_setMembers}
              acc_setIsAdding={acc_setIsAdding}
            />
          )}
          {acc_isEditing && (
            <Account_edit
              acc_members={acc_members}
              acc_selectedMember={acc_selectedMember}
              acc_setMembers={acc_setMembers}
              acc_setIsEditing={acc_setIsEditing}
            />
          )}
        </div>
      </header>
    </React.Fragment>
  )
}

export default Add_my_account ;
