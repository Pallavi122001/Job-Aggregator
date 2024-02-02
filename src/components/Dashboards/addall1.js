import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './addall.css';

function Add_com({com_members, com_setMembers, com_setIsAdding }) {
  const [com_Name, com_setName] = useState('');
  const [com_type, com_set_type] = useState('');
  const [com_email, com_setEmail] = useState('');
  const [com_date, com_setDate] = useState('');
  const [com_contact, com_setContact] = useState('');
  const [com_profile, com_setProfiles] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const com_handleAdd = (e1) => {
    e1.preventDefault();
    if (!com_Name || !com_type || !com_email || !com_date || !com_contact || !com_profile) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All Fields are required.',
        showConfirmButton: true,
      });
    }

    const iD = com_members.length + 1;
    const com_newMember = {
      iD,
      com_Name,
      com_type,
      com_email,
      com_date,
      com_contact,
      com_profile,
    };

    // Add the new member to the members array
    const com_updatedMembers = [...com_members, com_newMember];
    com_setMembers(com_updatedMembers);

    // Save the updated members array to local storage
    localStorage.setItem('com_members', JSON.stringify(com_updatedMembers));

    com_setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: `${com_Name} ${com_type}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='smallcontainer'>
      <form onSubmit={com_handleAdd}>
      <label htmlfor="com_Name" >Com Name         </label>
      <input id="com_Name" type="text" ref={textInput} name="com_Name" value={com_Name} 
        onChange={e1=>com_setName(e1.target.value)}></input><br></br>
        
        <label htmlfor="com_type" >Com Type  </label>
        <input id="com_type" type="text" ref={textInput} name="com_type" value={com_type} 
          onChange={e1=>com_set_type(e1.target.value)}></input><br></br>
  
        <label htmlfor="com_email" >Com Email</label>
        <input id="com_email" type="email" ref={textInput} name="email" value={com_email} 
          onChange={e1=>com_setEmail(e1.target.value)}></input> <br></br>
  
  <label htmlfor="com_date" >Date   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp;</label>
        <input id="com_date" type="date" ref={textInput} name="com_date" value={com_date} 
          onChange={e1=>com_setDate(e1.target.value)}></input> <br></br>
          
          <label htmlfor="com_contact" >Com Contact   </label>
        <input id="com_contact" type="contact" ref={textInput} name="com_contact" value={com_contact} 
          onChange={e1=>com_setContact(e1.target.value)}></input> <br></br>
  
          <label htmlfor="com_profile" >Com Profile    </label>
          <input id="com_profile" type="text" ref={textInput} name="com_profile" value={com_profile} 
            onChange={e1=>com_setProfiles(e1.target.value)}></input> <br></br>
    
          <div>
      <input type="submit" value="Add"/>
          <input classname="muted-button" type="button" value="cancel" onClick={()=>com_setIsAdding(false)}/>
          </div>
  
          <div>
          </div>
      </form>
    </div>
  );
}

export default Add_com;