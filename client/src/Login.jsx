import React, { useState } from 'react';
import axios from 'axios';
import { setToken } from './Auth';
import { HiInformationCircle } from 'react-icons/hi';

function Login() {
  const [username, setUsername] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleIdNumber = (e) => {
    setIdNumber(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onClickLogin = () => {
    console.log('click login');
    if ((username === '') & (idNumber === '')) {
      return;
    } else {
      axios
        .post('http://localhost:8000/login', {
          username: username,
          idNumber: idNumber,
        })
        .then(function (response) {
          if (response.data.token) {
            setToken(response.data.token);
            console.log(response.data.token);
          }
        })
        .catch(function (err) {
          console.log('err', err);
        });
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="info-icon">
          <HiInformationCircle size="50" color="#1d98b6" />
        </div>
        <div className="login-order">Enter your information</div>
        <div className="username-container">
          <input
            className="info-input"
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <input
            className="info-input"
            type="password"
            placeholder="Enter your identification number"
            value={idNumber}
            onChange={handleIdNumber}
          />
        </div>
        <div>
          <input
            className="info-input"
            type="phoneNumber"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
        </div>
        <div>
          <button className="login-button" type="button" onClick={onClickLogin}>
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
