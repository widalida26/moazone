import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import Modal from '../components/Modal';
import Header from '../components/Header';
import InputForm from '../components/InputForm';

function Identification() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [isExisted, setIsExisted] = useState(false);

  const additionalGuideList = [
    '럭키 룰렛 이벤트는 발송된 ID를 통해서만 진행할 수 있습니다',
    '입력된 정보는 개인 식별 정보없이 익명으로 처리됩니다',
  ];

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const onClickLoginButton = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/auth`, { user_id: userId })
      .then((res) => {
        if (res.data.message === 'already existed') {
          setIsExisted(true);
        }
        if (res.data.hasOwnProperty('user_id')) {
          const user_id = res.data.user_id;
          navigate('/survey', { state: { user_id: user_id } });
        }
      })
      .catch((err) => console.log(err));
  };

  const onClickModalButton = () => {
    navigate('/');
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
        <div className="identification-container">
          <InputForm
            guide="사전에 발송된 ID를 입력해주세요"
            value={userId}
            onChange={(event) => handleUserId(event)}
          />
          <button
            className="enter-button login-button"
            type="button"
            onClick={onClickLoginButton}
          >
            LOGIN
          </button>
        </div>
      </div>
      {isExisted ? (
        <Modal message="이미 이벤트에 참여하셨습니다" onClick={onClickModalButton} />
      ) : null}
    </div>
  );
}

export default Identification;
