import React, { useState, useEffect } from 'react';
import './changePass.css';
import axios from 'axios';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setOldPassword] = useState(''); // Store the old password
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make a request to the server to get the old password
    axios.get('/changePass')
  .then((response) => {
    setOldPassword(response.data.password);
  })
  .catch((error) => {
    console.error(error);
    setMessage('Failed to retrieve the old password. Please try again.');
  });
  }, []);

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      window.alert("New password and confirm password don't match.");
      return;
    }

    // Check if the old password matches the retrieved old password
    if (password !== 'password') {
      window.alert('Old password is incorrect. Please try again.');
      return;
    }
  };

  return (
    <React.Fragment>
      <div className="change-password">
        <h1>Change Password Form</h1>
        <hr></hr>
        <br></br>
        <label htmlFor="new_password">New Password:</label>
        <br></br>
        <input
          id="new_password"
          type="password"
          name="new_password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="confirm_password">Confirm Password:</label>
        <br></br>
        <input
          id="confirm_password"
          type="password"
          name="confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="old_password">Old Password:</label>
        <br></br>
        <input
          id="old_password"
          type="password"
          name="old_password"
          value={password}
          onChange={(e) => setOldPassword(e.target.value)}
        ></input>
        <br></br>
        <div className='changediv'>
        <button className="custom-button" id="change_password" onClick={handleChangePassword}>
          Change Password
        </button>
        <a href="addAdminheader">
          <button  className="custom-button-cancel" id="cancel">Cancel</button>
        </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
