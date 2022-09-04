import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiInformationCircle } from 'react-icons/hi';
import InputForm from '../components/InputForm';
import RadioForm from '../components/RadioForm';
import SelectForm from '../components/SelectForm';
import DateForm from '../components/DateForm';
import Header from '../components/Header';
import {
  genderList,
  incomeTypeList,
  eduTypeList,
  familyTypeList,
  houseTypeList,
  occupationTypeList,
} from '../components/List';

function Survey() {
  const { user_id } = useLocation().state;
  console.log(user_id);

  // use state
  const [gender, setGender] = useState(genderList[0]);
  const [carOwnership, setCarOwnership] = useState('Yes');
  const [realityOwnership, setRealityOwnership] = useState('Yes');
  const [childNumber, setChildNumber] = useState('0');
  const [income, setIncome] = useState('0');
  const [incomeType, setIncomeType] = useState(incomeTypeList[0]);
  const [eduType, setEduType] = useState(eduTypeList[0]);
  const [familyType, setFamilyType] = useState(familyTypeList[0]);
  const [houseType, setHouseType] = useState(houseTypeList[0]);
  const [birthDate, setBirthDate] = useState(new Date(1995, 1, 6));
  const [employmentDate, setEmploymentDate] = useState(new Date(2019, 1, 12));
  const [cellphoneOwnership, setCellphoneOwnership] = useState('Yes');
  const [workPhoneOwnership, setWorkPhoneOwnership] = useState('Yes');
  const [phoneOwnership, setPhoneOwnership] = useState('Yes');
  const [emailOwnership, setEmailOwnership] = useState('Yes');
  const [occupationType, setOccupationType] = useState(houseTypeList[0]);
  const [familyNumber, setFamilyNumber] = useState('0');
  const [creditMonth, setCreditMonth] = useState(new Date(2022, 0));
  // const [creditLevel, setCreditLevel] = useState(creditLevelList[0]);

  const navigate = useNavigate();

  const additionalGuideList = [
    '모든 문항을 기재하여야 럭키 룰렛 이벤트 참여가 가능합니다',
    '개인정보는 개인 식별이 불가능한 형태로 가공되어 사용됩니다',
  ];

  const handleInputValue = (e, inputLength, setValue, isSeparated) => {
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

  const handleRadio = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSelect = (selected, setValue) => {
    setValue(selected);
  };

  const onClickEnter = () => {
    const surveyData = {
      gender,
      car: carOwnership,
      reality: realityOwnership,
      child_num: childNumber,
      income_total: income,
      income_type: incomeType,
      edu_type: eduType,
      family_type: familyType,
      house_type: houseType,
      DAYS_BIRTH: birthDate,
      DAYS_EMPLOYED: employmentDate,
      FLAG_MOBIL: cellphoneOwnership,
      work_phone: workPhoneOwnership,
      phone: phoneOwnership,
      email: emailOwnership,
      occyp_type: occupationType,
      family_size: familyNumber,
      begin_month: creditMonth,
      // credit: creditLevel,
    };

    navigate('/consent', { state: { user_id: user_id, survey_data: surveyData } });
  };

  return (
    <div className="enter-container">
      <Header />
      <div className="form-container">
        <div className="info-icon">
          <HiInformationCircle size="50" color="#1d98b6" />
        </div>
        <div className="input-guide">럭키 룰렛 이벤트 참여</div>
        {additionalGuideList.map((value, i) => (
          <div className="additional-guide" key={i}>
            {value}
          </div>
        ))}
        <RadioForm
          guide="성별을 선택해주세요"
          list={genderList}
          state={gender}
          onChange={(event) => handleRadio(event, setGender)}
        />
        <RadioForm
          guide="자가용을 소유하고 있습니까"
          state={carOwnership}
          onChange={(event) => handleRadio(event, setCarOwnership)}
        />
        <RadioForm
          guide="부동산을 소유하고 있습니까"
          state={realityOwnership}
          onChange={(event) => handleRadio(event, setRealityOwnership)}
        />
        <InputForm
          guide="자녀가 몇 명입니까"
          value={childNumber}
          onChange={(event) => handleInputValue(event, 2, setChildNumber)}
        />
        <InputForm
          guide="연봉을 입력해주세요"
          unit="$"
          value={income}
          onChange={(event) => handleInputValue(event, 10, setIncome, true)}
        />
        <SelectForm
          guide="소득 유형을 선택해주세요"
          list={incomeTypeList}
          value={incomeType}
          onSelect={(event) => handleSelect(event, setIncomeType)}
        />
        <SelectForm
          guide="학력을 선택해주세요"
          list={eduTypeList}
          value={eduType}
          onSelect={(event) => handleSelect(event, setEduType)}
        />
        <SelectForm
          guide="가정 유형을 선택해주세요"
          list={familyTypeList}
          value={familyType}
          onSelect={(event) => handleSelect(event, setFamilyType)}
        />
        <SelectForm
          guide="주거 유형을 선택해주세요"
          list={houseTypeList}
          value={houseType}
          onSelect={(event) => handleSelect(event, setHouseType)}
        />
        <DateForm
          guide="생년월일을 입력해주세요"
          date={birthDate}
          setDate={setBirthDate}
          dateFormat="yyyy.MM.dd"
        />
        <DateForm
          guide="고용일자를 입력해주세요"
          date={employmentDate}
          setDate={setEmploymentDate}
          dateFormat="yyyy.MM.dd"
        />
        <RadioForm
          guide="휴대전화를 소유하고 있습니까"
          state={cellphoneOwnership}
          onChange={(event) => handleRadio(event, setCellphoneOwnership)}
        />
        <RadioForm
          guide="업무용 휴대전화를 소유하고 있습니까"
          state={workPhoneOwnership}
          onChange={(event) => handleRadio(event, setWorkPhoneOwnership)}
        />
        <RadioForm
          guide="전화기기를 소유하고 있습니까"
          state={phoneOwnership}
          onChange={(event) => handleRadio(event, setPhoneOwnership)}
        />
        <RadioForm
          guide="이메일을 소유하고 있습니까"
          state={emailOwnership}
          onChange={(event) => handleRadio(event, setEmailOwnership)}
        />
        <SelectForm
          guide="직업 유형을 선택해주세요"
          list={occupationTypeList}
          value={occupationType}
          onSelect={(event) => handleSelect(event, setOccupationType)}
        />
        <InputForm
          guide="가족 수를 입력해주세요"
          value={familyNumber}
          onChange={(event) => handleInputValue(event, 2, setFamilyNumber)}
        />
        <DateForm
          guide="신용카드 발급 일자를 입력해주세요"
          date={creditMonth}
          setDate={setCreditMonth}
          dateFormat="yyyy.MM"
          noDate={true}
        />
        <button className="enter-button" type="button" onClick={onClickEnter}>
          설문을 제출합니다
        </button>
      </div>
    </div>
  );
}

export default Survey;
