import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { setToken } from './Auth';
import { HiInformationCircle } from 'react-icons/hi';

function Login() {
  const [username, setUsername] = useState('');
  const [idFirst, setIdFirst] = useState('');
  const [idLast, setIdLast] = useState('');
  const [lastClass, setLastClass] = useState('info-input id-last');
  const [phoneNumber, setPhoneNumber] = useState('');
  const idFirstRef = useRef();
  const idLastRef = useRef();
  const phoneNumberRef = useRef();

  useEffect(() => {
    if (idLast.length > 0) {
      setLastClass('info-input id-last typed');
    } else {
      setLastClass('info-input id-last');
    }
  }, [idLast]);

  const handleUsername = (e) => {
    const result = e.target.value.replace(/[^a-z|ㄱ-ㅎ|가-힣]/gi, '');
    setUsername(result);
  };

  const handleIdFirst = (e) => {
    const value = idFirstRef.current.value.replace(/\D+/g, '');
    const numberLength = 13;

    let result = '';
    for (let i = 0; i < value.length && i < numberLength; i++) {
      if (i === 6) {
        result += '-';
      }
      if (i >= 6) {
        idLastRef.current.focus();
      }

      result += value[i];
    }

    console.log(result);
    idFirstRef.current.value = result;

    const regex = /^[0-9|-]{0,13}$/;
    if (regex.test(e.target.value)) {
      setIdFirst(e.target.value);
    }
  };

  const handleIdLast = (e) => {
    const regex = /^[0-9]{0,6}$/;
    if (regex.test(e.target.value)) {
      setIdLast(e.target.value);
    }
  };

  const handlePhoneNumber = (e) => {
    const value = phoneNumberRef.current.value.replace(/\D+/g, '');
    const numberLength = 11;

    let result;
    result = '';

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += '-';
          break;
        case 7:
          result += '-';
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneNumberRef.current.value = result;

    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  const handleLastKeyDown = (e) => {
    console.log('?????');
    if (idLast === '') {
      switch (e.code) {
        case 'Backspace':
          idFirstRef.current.focus();
          break;
        default:
          break;
      }
    }
  };

  const onClickLogin = () => {
    if ((username === '') & (idFirst === '')) {
      return;
    } else {
      axios
        .post('http://localhost:8000/login', {
          username: username,
          idNumber: idFirst,
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
          <div className="form-guide">Name</div>
          <input
            className="info-input"
            type="text"
            value={username}
            // ref={usernameRef}
            onChange={handleUsername}
          />
        </div>
        <div>
          <div className="form-guide">Identification Number</div>
          <input
            className="info-input id-first"
            type="text"
            value={idFirst}
            ref={idFirstRef}
            onChange={handleIdFirst}
          />
          <input
            className={lastClass}
            type="password"
            value={idLast}
            ref={idLastRef}
            onChange={handleIdLast}
            onKeyDown={handleLastKeyDown}
            autoComplete="new-password"
          />
        </div>
        <div>
          <div className="form-guide">Phone Number</div>
          <input
            className="info-input"
            type="phoneNumber"
            value={phoneNumber}
            ref={phoneNumberRef}
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
