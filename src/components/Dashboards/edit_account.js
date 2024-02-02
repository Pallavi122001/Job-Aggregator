import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './edit_account.css';

function Account_edit({ acc_members, acc_selectedMember, acc_setMembers, acc_setIsEditing }) {
  const ID = acc_selectedMember.ID;
  const [acc_Name, acc_setName] = useState(acc_selectedMember.acc_Name);
  const [acc_pass, acc_setpass] = useState(acc_selectedMember.acc_pass);
  const [com_Acc_pass, com_Acc__setpass] = useState(acc_selectedMember.com_Acc_pass);
  const [acc_email, acc_setEmail] = useState(acc_selectedMember.acc_email);
  const [acc_date, acc_setDate] = useState(acc_selectedMember.acc_date);
  const [acc_contact, acc_setContact] = useState(acc_selectedMember.acc_contact);
  const [acc_address, acc_setAddress] = useState(acc_selectedMember.acc_address);
  const [acc_city, acc_setCity] = useState(acc_selectedMember.acc_city);
  const [acc_state, acc_setstate] = useState(acc_selectedMember.acc_state);

  useEffect(() => {
    // Populate the form with the selectedMember data
    acc_setName(acc_selectedMember.acc_Name);
    acc_setpass(acc_selectedMember.acc_pass);
    com_Acc__setpass(acc_selectedMember.com_Acc_pass);
    acc_setEmail(acc_selectedMember.acc_email);
    acc_setDate(acc_selectedMember.acc_date);
    acc_setContact(acc_selectedMember.acc_contact);
    acc_setAddress(acc_selectedMember.acc_address);
    acc_setCity(acc_selectedMember.acc_city);
    acc_setstate(acc_selectedMember.acc_state)
  }, [acc_selectedMember]);

  const acc_handleUpdate = (e2) => {
    e2.preventDefault();
    if (!acc_Name || !acc_pass || !com_Acc_pass || !acc_email || !acc_date || !acc_contact || !acc_address || !acc_city|| !acc_state) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All Fields are required.',
        showConfirmButton: true,
      });
    }

    const acc_updatedMember = {
        ID,
        acc_Name, 
        acc_pass, 
        com_Acc_pass,
        acc_email,
        acc_date,
        acc_contact, 
        acc_address, 
        acc_city, 
        acc_state, 
    };

    // Update the member in the members array
    const acc_updatedMembers = acc_members.map((acc_member) =>
      acc_member.ID === ID ? acc_updatedMember : acc_member
    );

    acc_setMembers(acc_updatedMembers);

    // Save the updated members array to local storage
    localStorage.setItem('acc_members', JSON.stringify(acc_updatedMembers));

    acc_setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated',
      text: `${acc_Name} ${acc_email}'s data has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container2">
      <form onSubmit={acc_handleUpdate}>

      <label htmlfor="acc_Name" >Acc Name         </label>
      <input id="acc_Name" type="text"  name="acc_Name" value={acc_Name} 
        onChange={e2=>acc_setName(e2.target.value)}></input><br></br>
        
        <label htmlfor="acc_pass" >Acc Password  </label>
        <input id="acc_pass" type="password"  name="acc_pass" value={acc_pass} 
          onChange={e2=>acc_setpass(e2.target.value)}></input><br></br>

          <label htmlfor="acc_pass2" >Confrim Pass  </label>
        <input id="acc_pass2" type="password" name="acc_pass2" value={com_Acc_pass} 
          onChange={e2=>com_Acc__setpass(e2.target.value)}></input><br></br>
  
        <label htmlfor="acc_email" >Com Email</label>
        <input id="acc_email" type="email"  name="acc_email" value={acc_email} 
          onChange={e2=>acc_setEmail(e2.target.value)}></input> <br></br>
  
  <label htmlfor="acc_date" >Date   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp;</label>
        <input id="acc_date" type="date" name="acc_date" value={acc_date} 
          onChange={e2=>acc_setDate(e2.target.value)}></input> <br></br>
          
          <label htmlfor="com_contact" >Com Contact   </label>
        <input id="com_contact" type="contact"  name="com_contact" value={acc_contact} 
          onChange={e2=>acc_setContact(e2.target.value)}></input> <br></br>
  
          <label htmlfor="acc_add" >Address    </label>
          <input id="acc_add" type="text" name="acc_add" value={acc_address} 
            onChange={e2=>acc_setAddress(e2.target.value)}></input> <br></br>
    
            <label htmlfor="acc_city" >City   </label>
          <input id="acc_city" type="text"  name="acc_city" value={acc_city} 
            onChange={e2=>acc_setCity(e2.target.value)}></input> <br></br>
    
            <label htmlfor="acc_state" >State    </label>
          <input id="acc_state" type="text" name="acc_state" value={acc_state} 
            onChange={e2=>acc_setstate(e2.target.value)}></input> <br></br>
    
        <div className='submit-input'>
        <input type="submit" value="update"/>
      <input className='muted-button' type="button" value="cancel" onClick={()=>acc_setIsEditing(false)}/>
      </div>
      </form>
    </div>
  );
}

export default Account_edit;