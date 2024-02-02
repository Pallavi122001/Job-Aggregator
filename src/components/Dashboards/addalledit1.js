import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './addalledit.css';

function AddCompanyEdit({ com_members, com_selectedMember, com_setMembers, com_setIsEditing }) {
  const iD = com_selectedMember.iD;
  const [com_Name, com_setName] = useState(com_selectedMember.com_Name);
  const [com_type, com_set_type] = useState(com_selectedMember.com_type);
  const [com_email, com_setEmail] = useState(com_selectedMember.com_email);
  const [com_date, com_setDate] = useState(com_selectedMember.com_date);
  const [com_contact, com_setContact] = useState(com_selectedMember.com_contact);
  const [com_profile, com_setProfiles] = useState(com_selectedMember.com_profile);

  useEffect(() => {
    // Populate the form with the selectedMember data
    com_setName(com_selectedMember.com_Name);
    com_set_type(com_selectedMember.com_type);
    com_setEmail(com_selectedMember.com_email);
    com_setDate(com_selectedMember.com_date);
    com_setContact(com_selectedMember.com_contact);
    com_setProfiles(com_selectedMember.com_profile);
  }, [com_selectedMember]);

  const com_handleUpdate = (e1) => {
    e1.preventDefault();
    if (!com_Name || !com_type || !com_email || !com_date || !com_contact || !com_profile) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All Fields are required.',
        showConfirmButton: true,
      });
    }

    const com_updatedMember = {
      iD,
      com_Name ,
      com_type,
      com_email,
      com_date,
      com_contact,
      com_profile,
    };

    // Update the member in the members array
    const com_updatedMembers = com_members.map((com_member) =>
      com_member.iD === iD ? com_updatedMember : com_member
    );

    com_setMembers(com_updatedMembers);

    // Save the updated members array to local storage
    localStorage.setItem('com_members', JSON.stringify(com_updatedMembers));

    com_setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated',
      text: `${com_Name } ${com_type}'s data has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={com_handleUpdate}>

      <label htmlfor="com_Name" >Com Name         </label>
      <input id="com_Name" type="text"  name="com_Name" value={com_Name} 
        onChange={e1=>com_setName(e1.target.value)}></input><br></br>
        
        <label htmlfor="com_type" >Com Type     </label>
        <input id="com_type" type="text"  name="com_type" value={com_type} 
          onChange={e1=>com_set_type(e1.target.value)}></input><br></br>
  
        <label htmlfor="com_email" >Com Email  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input id="com_email" type="email"  name="email" value={com_email} 
          onChange={e1=>com_setEmail(e1.target.value)}></input> <br></br>
  
  <label htmlfor="com_date" >Date   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp;</label>
        <input id="com_date" type="date"  name="com_date" value={com_date} 
          onChange={e1=>com_setDate(e1.target.value)}></input> <br></br>
          
          <label htmlfor="com_contact" >Com Contact  &nbsp;&nbsp;&nbsp; </label>
        <input id="com_contact" type="contact"  name="com_contact" value={com_contact} 
          onChange={e1=>com_setContact(e1.target.value)}></input> <br></br>
  
          <label htmlfor="com_profile" >Com Profile  &nbsp;&nbsp;&nbsp;&nbsp;  </label>
          <input id="com_profile" type="text"  name="com_profile" value={com_profile} 
            onChange={e1=>com_setProfiles(e1.target.value)}></input> <br></br>
    
    
        <div className='submit-input'>
        <input type="submit" value="update"/>
      <input className='muted-button' type="button" value="cancel" onClick={()=>com_setIsEditing(false)}/>
      </div>
      </form>
    </div>
  );
}

export default AddCompanyEdit;