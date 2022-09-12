import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components//Header';
import Popup from '../components/Popup';

const Consent = () => {
  const [isConsent, SetConsent] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate();

  const locState = useLocation().state;
  const username = locState.username;
  const accessToken = locState.accessToken;
  const surveyData = locState.surveyData;

  const handleCheckbox = (e) => {
    SetConsent(!isConsent);
  };

  const onClickAgree = () => {
    if (isConsent) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER}/survey`,
          {
            user_id: username,
            survey_data: surveyData,
          },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then((res) => {
          navigate('/event');
        })
        .catch((err) => console.log(err));
    } else {
      setModalVisible(true);
    }
  };

  const handleConsentModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="consent-container">
      <Header />
      <div className="consent-guide">
        <img className="consent-img" alt="consnet.png" src="/img/consent.png" />
      </div>
      <div className="check-container">
        <input
          className="checkbox"
          type="checkbox"
          value={isConsent}
          onChange={handleCheckbox}
        />
        럭키 룰렛 이벤트 참여를 위한 개인정보 수집 및 활용에 동의합니다
        <button className="consent-button enter-button" onClick={onClickAgree}>
          럭키 룰렛 돌리기
        </button>
      </div>
      <Popup
        message="개인정보 수집 및 활용에 체크해주세요"
        visible={modalVisible}
        onClickPopupButton={handleConsentModal}
      />
    </div>
  );
};
export default Consent;
