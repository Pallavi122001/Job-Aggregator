import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './addall_account.css';

function Add_Account_Data({acc_members, acc_setMembers, acc_setIsAdding }) {
  const [acc_Name, acc_setName] = useState('');
  const [acc_pass, acc_setpass] = useState('');
  const [com_Acc_pass, com_Acc__setpass] = useState('');
  const [acc_email, acc_setEmail] = useState('');
  const [acc_date, acc_setDate] = useState('');
  const [acc_contact, acc_setContact] = useState('');
  const [acc_address, acc_setAddress] = useState('');
  const [acc_city, acc_setCity] = useState('');
  const [acc_state, acc_setstate] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const acc_handleAdd = (e2) => {
    e2.preventDefault();
    if (!acc_Name || !acc_pass || !com_Acc_pass || !acc_email || !acc_date || !acc_contact || !acc_address || !acc_city|| !acc_state) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All Fields are required.',
        showConfirmButton: true,
      });
    }

    const ID = acc_members.length + 1;
    const acc_newMember = {
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

    // Add the new member to the members array
    const acc_updatedMembers = [...acc_members, acc_newMember];
    acc_setMembers(acc_updatedMembers);

    // Save the updated members array to local storage
    localStorage.setItem('acc_members', JSON.stringify(acc_updatedMembers));

    acc_setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: `${acc_Name} ${acc_email}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='smallcontainer1'>
      <form onSubmit={acc_handleAdd}>
      <label htmlfor="acc_Name" >Acc Name         </label>
      <input id="acc_Name" type="text" ref={textInput} name="acc_Name" value={acc_Name} 
        onChange={e2=>acc_setName(e2.target.value)}></input><br></br>
        
        <label htmlfor="acc_pass" >Acc Password  </label>
        <input id="acc_pass" type="password" ref={textInput} name="acc_pass" value={acc_pass} 
          onChange={e2=>acc_setpass(e2.target.value)}></input><br></br>

          <label htmlfor="acc_pass2" >Confirm Pass  </label>
        <input id="acc_pass2" type="password" ref={textInput} name="acc_pass2" value={com_Acc_pass} 
          onChange={e2=>com_Acc__setpass(e2.target.value)}></input><br></br>
  
        <label htmlfor="acc_email" >Com Email</label>
        <input id="acc_email" type="email" ref={textInput} name="acc_email" value={acc_email} 
          onChange={e2=>acc_setEmail(e2.target.value)}></input> <br></br>
  
  <label htmlfor="acc_date" >Date   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp; &nbsp;&nbsp;</label>
        <input id="acc_date" type="date" ref={textInput} name="acc_date" value={acc_date} 
          onChange={e2=>acc_setDate(e2.target.value)}></input> <br></br>
          
          <label htmlfor="com_contact" >Com Contact   </label>
        <input id="com_contact" type="contact" ref={textInput} name="com_contact" value={acc_contact} 
          onChange={e2=>acc_setContact(e2.target.value)}></input> <br></br>
  
          <label htmlfor="acc_add" >Address    </label>
          <input id="acc_add" type="text" ref={textInput} name="acc_add" value={acc_address} 
            onChange={e2=>acc_setAddress(e2.target.value)}></input> <br></br>
    
            <label htmlfor="acc_city" >City   </label>
          <input id="acc_city" type="text" ref={textInput} name="acc_city" value={acc_city} 
            onChange={e2=>acc_setCity(e2.target.value)}></input> <br></br>
    
            <label htmlfor="acc_state" >State    </label>
          <input id="acc_state" type="text" ref={textInput} name="acc_state" value={acc_state} 
            onChange={e2=>acc_setstate(e2.target.value)}></input> <br></br>
    
          <div>
      <input type="submit" value="Add"/>
          <input classname="muted-button" type="button" value="cancel" onClick={()=>acc_setIsAdding(false)}/>
          </div>
  
          <div>
          </div>
      </form>
    </div>
  );
}

export default Add_Account_Data;