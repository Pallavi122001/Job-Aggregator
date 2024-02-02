import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './addalledit.css';

function Applicationedit({ members, selectedMember, setMembers, setIsEditing }) {
  const id = selectedMember.id;
  const [firstName, setFirstName] = useState(selectedMember.firstName);
  const [lastName, setLastName] = useState(selectedMember.lastName);
  const [email, setEmail] = useState(selectedMember.email);
  const [branch, setBranch] = useState(selectedMember.branch);
  const [date, setDate] = useState(selectedMember.date);
  const [contact, setContact] = useState(selectedMember.contact);
  const [profile, setProfiles] = useState(selectedMember.event);

  useEffect(() => {
    // Populate the form with the selectedMember data
    setFirstName(selectedMember.firstName);
    setLastName(selectedMember.lastName);
    setEmail(selectedMember.email);
    setBranch(selectedMember.branch);
    setDate(selectedMember.date);
    setContact(selectedMember.contact);
    setProfiles(selectedMember.event);
  }, [selectedMember]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !branch || !date || !contact || !profile) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All Fields are required.',
        showConfirmButton: true,
      });
    }

    const updatedMember = {
      id,
      firstName,
      lastName,
      email,
      branch,
      date,
      contact,
      profile,
    };

    // Update the member in the members array
    const updatedMembers = members.map((member) =>
      member.id === id ? updatedMember : member
    );

    setMembers(updatedMembers);

    // Save the updated members array to local storage
    localStorage.setItem('members', JSON.stringify(updatedMembers));

    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated',
      text: `${firstName} ${lastName}'s data has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
      <label htmlfor="firstName" >First Name       </label>
      <input id="firstName" type="text" name="firstName" value={firstName} 
        onChange={e=>setFirstName(e.target.value)}></input><br></br>
   
        <label htmlfor="lastName" >Last Name       </label>
      <input id="lastName" type="text"  name="lastName" value={lastName} 
        onChange={e=>setLastName(e.target.value)}></input><br></br>
   
        <label htmlfor="email" >Email   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input id="email" type="email"  name="email" value={email} 
          onChange={e=>setEmail(e.target.value)}></input> <br></br>
  
          <label htmlfor="branch" >Branch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input id="branch" type="branch"  name="branch" value={branch} 
          onChange={e=>setBranch(e.target.value)}></input><br></br> 
  
          <label htmlfor="date" >Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input id="date" type="date"  name="date" value={date} 
          onChange={e=>setDate(e.target.value)}></input> <br></br>
          
          <label htmlfor="Contact" >Contact &nbsp;&nbsp;&nbsp;  </label>
        <input id="contact" type="contact"  name="Contact" value={contact} 
          onChange={e=>setContact(e.target.value)}></input> <br></br>
          
          <label htmlfor="Profile" >Profile   &nbsp;&nbsp;&nbsp;</label>
          <input id="profile" type="profile"  name="Profile" value={profile} 
            onChange={e=>setProfiles(e.target.value)}></input> <br></br>
    
        <div className='submit-input'>
        <input type="submit" value="update"/>
      <input className='muted-button' type="button" value="cancel" onClick={()=>setIsEditing(false)}/>
      </div>
      </form>
    </div>
  );
}

export default Applicationedit;