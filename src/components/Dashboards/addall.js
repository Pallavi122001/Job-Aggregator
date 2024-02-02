import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './addall.css';

function Add_Application({ members, setMembers, setIsAdding }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [date, setDate] = useState('');
  const [contact, setContact] = useState('');
  const [profile, setProfiles] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !branch || !date || !contact || !profile) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All Fields are required.',
        showConfirmButton: true,
      });
    }

    const id = members.length + 1;
    const newMember = {
      id,
      firstName,
      lastName,
      email,
      branch,
      date,
      contact,
      profile,
    };

    // Add the new member to the members array
    const updatedMembers = [...members, newMember];
    setMembers(updatedMembers);

    // Save the updated members array to local storage
    localStorage.setItem('members', JSON.stringify(updatedMembers));

    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='smallcontainer'>
      <form onSubmit={handleAdd}>
      <label htmlfor="firstName" >Full Name         </label>
      <input id="fullName" type="text" ref={textInput} name="fullName" value={firstName} 
        onChange={e=>setFirstName(e.target.value)}></input><br></br>
        
        <label htmlfor="lastName" >Last Name     </label>
        <input id="lastName" type="text" ref={textInput} name="lastName" value={lastName} 
          onChange={e=>setLastName(e.target.value)}></input><br></br>
  
        <label htmlfor="email" >Email  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input id="email" type="email" ref={textInput} name="email" value={email} 
          onChange={e=>setEmail(e.target.value)}></input> <br></br>
  
  <label htmlfor="date" >Date   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp;</label>
        <input id="date" type="date" ref={textInput} name="date" value={date} 
          onChange={e=>setDate(e.target.value)}></input> <br></br>
          
          <label htmlfor="branch" >Branch  &nbsp;&nbsp;&nbsp;  </label>
        <input id="branch" type="branch" ref={textInput} name="branch" value={branch} 
          onChange={e=>setBranch(e.target.value)}></input><br></br> 
  
          <label htmlfor="Contact" >Contact  &nbsp;&nbsp;&nbsp; </label>
        <input id="contact" type="contact" ref={textInput} name="Contact" value={contact} 
          onChange={e=>setContact(e.target.value)}></input> <br></br>
  
          <label htmlfor="Profile" >Profile  &nbsp;&nbsp;&nbsp;&nbsp;  </label>
          <input id="profile" type="profile" ref={textInput} name="profile" value={profile} 
            onChange={e=>setProfiles(e.target.value)}></input> <br></br>
    
          <div>
      <input type="submit" value="Add"/>
          <input classname="muted-button" type="button" value="cancel" onClick={()=>setIsAdding(false)}/>
          </div>
  
          <div>
          </div>
      </form>
    </div>
  );
}

export default Add_Application;
