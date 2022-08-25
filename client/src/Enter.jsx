import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from './Auth';
import { HiInformationCircle } from 'react-icons/hi';
import InputForm from './Components/InputForm';
import RadioForm from './Components/RadioForm';

function Enter() {
  const [username, setUsername] = useState('');
  const [idFirst, setIdFirst] = useState('');
  const [idGender, setIdGender] = useState('');
  const [idLast, setIdLast] = useState('');
  const [lastClass, setLastClass] = useState('info-input id-last');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('Male');
  const [carOwnership, setCarOwnership] = useState('Yes');
  const idFirstRef = useRef();
  const idGenderRef = useRef();
  const idLastRef = useRef();
  const phoneNumberRef = useRef();
  const answerList = ['Yes', 'No'];
  const genderList = ['Male', 'Female'];

  const navigate = useNavigate();

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

  const handleInputValue = (e, inputLength, setValue) => {
    const regex = new RegExp(`[0-9]{0,${inputLength}}`);
    // const regex = /^[0-9|-]{0,inputLength}$/;
    if (regex.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  const handleOnKeyDown = (inputValue, inputLength, nextRef) => {
    if (inputValue.length >= inputLength) {
      nextRef.current.focus();
    }
  };

  const handleIdLast = (e) => {
    const regex = /^[0-9]{0,6}$/;
    if (regex.test(e.target.value)) {
      setIdLast(e.target.value);
    }
  };

  const onClickIdLast = (e) => {
    if (idGender.length === 0) {
      idGenderRef.current.focus();
    }
    idGenderRef.current.focus();
  };

  const OnKeyDownLastId = (e) => {
    if (idLast === '') {
      switch (e.code) {
        case 'Backspace':
          idGender.current.focus();
          break;
        default:
          break;
      }
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

  const handleRadio = (e, setValue) => {
    setValue(e.target.value);
  };

  const onClickEnter = () => {
    // navigate('/consent');
    // if ((username === '') & (idFirst === '')) {
    //   return;
    // } else {
    //   axios
    //     .post('http://localhost:8000/login', {
    //       username: username,
    //       idNumber: idFirst,
    //     })
    //     .then(function (response) {
    //       if (response.data.token) {
    //         setToken(response.data.token);
    //         console.log(response.data.token);
    //       }
    //     })
    //     .catch(function (err) {
    //       console.log('err', err);
    //     });
    // }
  };

  return (
    <div className="enter-container">
      <div className="form-container">
        <div className="info-icon">
          <HiInformationCircle size="50" color="#1d98b6" />
        </div>
        <div className="input-guide">Enter your information</div>
        <InputForm guide="Name" value={username} onChange={handleUsername} />
        <div className="input-container">
          <div className="form-guide">Identification Number</div>
          <div className="id-input">
            <input
              className="info-input id-first"
              type="text"
              value={idFirst}
              ref={idFirstRef}
              onChange={(event) => handleInputValue(event, 6, setIdFirst)}
              onKeyDown={() => handleOnKeyDown(idFirst, 6, idGenderRef)}
            />
            <input className="info-input idHypen" value="-" disabled />
            <input
              className="info-input idGender"
              value={idGender}
              ref={idGenderRef}
              onChange={(event) => handleInputValue(event, 1, setIdGender)}
              onKeyDown={() => handleOnKeyDown(idGender, 1, idLastRef)}
            />
            <input
              className={lastClass}
              type="password"
              autoComplete="new-password"
              value={idLast}
              ref={idLastRef}
              onChange={handleIdLast}
              onKeyDown={OnKeyDownLastId}
              onClick={onClickIdLast}
            />
          </div>
        </div>
        <InputForm
          guide="Phone Number"
          value={phoneNumber}
          inputRef={phoneNumberRef}
          onChange={handlePhoneNumber}
        />
        <RadioForm
          guide="Gender"
          list={genderList}
          state={gender}
          onClick={(event) => handleRadio(event, setGender)}
        />
        <RadioForm
          guide="Car Ownership"
          list={answerList}
          state={carOwnership}
          onClick={(event) => handleRadio(event, setCarOwnership)}
        />
        <button className="enter-button" type="button" onChange={onClickEnter}>
          ENTER
        </button>
      </div>
    </div>
  );
}

export default Enter;
