import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiInformationCircle } from 'react-icons/hi';
import InputForm from '../components/InputForm';
import RadioForm from '../components/RadioForm';
import SelectForm from '../components/SelectForm';
import DateForm from '../components/DateForm';
import {
  incomeTypeList,
  eduTypeList,
  familyTypeList,
  houseTypeList,
  occupationTypeList,
  creditLevelList,
} from '../components/List';

function Enter() {
  // use state
  const [username, setUsername] = useState('');
  const [idFirst, setIdFirst] = useState('');
  const [idGender, setIdGender] = useState('');
  const [idLast, setIdLast] = useState('');
  const [lastClass, setLastClass] = useState('info-input id-last');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('Male');
  const [carOwnership, setCarOwnership] = useState('Yes');
  const [realityOwnership, setRealityOwnership] = useState('Yes');
  const [childNumber, setChildNumber] = useState('');
  const [income, setIncome] = useState('');
  const [incomeType, setIncomeType] = useState(incomeTypeList[0]);
  const [eduType, setEduType] = useState(eduTypeList[0]);
  const [familyType, setFamilyType] = useState(familyTypeList[0]);
  const [houseType, setHouseType] = useState(houseTypeList[0]);
  const [birthDate, setBirthDate] = useState(new Date(1995, 1, 6));
  const [employmentDate, setEmploymentDate] = useState(new Date(2019, 1, 12));
  const [cellphoneOwnership, setCellphoneOwnership] = useState('Yes');
  const [workPhoneOwnership, setWorkPhoneOwnership] = useState('Yes');
  const [phoneOwnership, setPhoneOwnership] = useState('Yes');
  const [occupationType, setOccupationType] = useState(houseTypeList[0]);
  const [familyNumber, setFamilyNumber] = useState('');
  const [creditMonth, setCreditMonth] = useState(new Date(2022, 0));
  const [creditLevel, setCreditLevel] = useState(creditLevelList[0]);

  // use ref
  const idFirstRef = useRef();
  const idGenderRef = useRef();
  const idLastRef = useRef();
  const phoneNumberRef = useRef();
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

  const handleInputValue = (e, inputLength, setValue, isSeparated) => {
    // const value = Number(e.target.value.replace(/(^0+)/, ''));
    const regex = new RegExp(`^[0-9|,]{0,${inputLength}}$`);
    if (regex.test(e.target.value)) {
      if (!isSeparated) {
        setValue(e.target.value);
      } else {
        const value = isSeparated ? parseFloat(e.target.value.replace(/,/g, '')) : '';
        const separated = value ? value.toLocaleString() : '';
        setValue(separated);
      }
    }
  };

  const handleOnKeyDownId = (event, inputValue, inputLength, nextRef, prevRef) => {
    if (nextRef) {
      if (inputValue.length >= inputLength) {
        nextRef.current.focus();
      }
    }
    if (prevRef) {
      if (inputValue === '') {
        switch (event.code) {
          case 'Backspace':
            prevRef.current.focus();
            break;
          default:
            break;
        }
      }
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

  // const OnKeyDownId = (e, prevRef) => {
  //   if (idLast === '') {
  //     switch (e.code) {
  //       case 'Backspace':
  //         prevRef.current.focus();
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // };

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

  const handleSelect = (selected, setValue) => {
    setValue(selected);
  };

  const onClickEnter = () => {
    console.log('enter');
    navigate('/consent');
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
              onKeyDown={(event) => handleOnKeyDownId(event, idFirst, 6, idGenderRef)}
            />
            <input className="info-input idHypen" value="-" disabled />
            <input
              className="info-input idGender"
              value={idGender}
              ref={idGenderRef}
              onChange={(event) => handleInputValue(event, 1, setIdGender)}
              onKeyDown={(event) =>
                handleOnKeyDownId(event, idGender, 1, idLastRef, idFirstRef)
              }
            />
            <input
              className={lastClass}
              type="password"
              autoComplete="new-password"
              value={idLast}
              ref={idLastRef}
              onChange={handleIdLast}
              onKeyDown={(event) =>
                handleOnKeyDownId(event, idLast, null, null, idGenderRef)
              }
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
          onChange={(event) => handleRadio(event, setGender)}
        />
        <RadioForm
          guide="Car Ownership"
          state={carOwnership}
          onChange={(event) => handleRadio(event, setCarOwnership)}
        />
        <RadioForm
          guide="Reality Ownership"
          state={realityOwnership}
          onChange={(event) => handleRadio(event, setRealityOwnership)}
        />
        <InputForm
          guide="Child Number"
          value={childNumber}
          onChange={(event) => handleInputValue(event, 2, setChildNumber)}
        />
        <InputForm
          guide="Annual Income"
          unit="$"
          value={income}
          onChange={(event) => handleInputValue(event, 10, setIncome, true)}
        />
        <SelectForm
          guide="Income Type"
          list={incomeTypeList}
          value={incomeType}
          onSelect={(event) => handleSelect(event, setIncomeType)}
        />
        <SelectForm
          guide="Education Type"
          list={eduTypeList}
          value={eduType}
          onSelect={(event) => handleSelect(event, setEduType)}
        />
        <SelectForm
          guide="Family Type"
          list={familyTypeList}
          value={familyType}
          onSelect={(event) => handleSelect(event, setFamilyType)}
        />
        <SelectForm
          guide="House Type"
          list={houseTypeList}
          value={houseType}
          onSelect={(event) => handleSelect(event, setHouseType)}
        />
        <DateForm
          guide="Date of Birth"
          date={birthDate}
          setDate={setBirthDate}
          dateFormat="yyyy.MM.dd"
        />
        <DateForm
          guide="Date of Employment"
          date={employmentDate}
          setDate={setEmploymentDate}
          dateFormat="yyyy.MM.dd"
        />
        <RadioForm
          guide="Cellphone Ownership"
          state={cellphoneOwnership}
          onChange={(event) => handleRadio(event, setCellphoneOwnership)}
        />
        <RadioForm
          guide="Work Phone Ownership"
          state={workPhoneOwnership}
          onChange={(event) => handleRadio(event, setWorkPhoneOwnership)}
        />
        <RadioForm
          guide="Phone Ownership"
          state={phoneOwnership}
          onChange={(event) => handleRadio(event, setPhoneOwnership)}
        />
        <SelectForm
          guide="Occupation Type"
          list={occupationTypeList}
          value={occupationType}
          onSelect={(event) => handleSelect(event, setOccupationType)}
        />
        <InputForm
          guide="Family Number"
          value={familyNumber}
          onChange={(event) => handleInputValue(event, 2, setFamilyNumber)}
        />
        <DateForm
          guide="Month of Credit Card Issue"
          date={creditMonth}
          setDate={setCreditMonth}
          dateFormat="yyyy.MM"
          noDate={true}
        />
        <RadioForm
          guide="Credit Level"
          list={creditLevelList}
          state={creditLevel}
          onChange={(event) => handleRadio(event, setCreditLevel)}
        />
        <button className="enter-button" type="button" onClick={onClickEnter}>
          ENTER
        </button>
      </div>
    </div>
  );
}

export default Enter;
