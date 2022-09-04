import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components//Header';
import Modal from '../components/Modal';

const Consent = () => {
  const [isConsent, SetConsent] = useState(false);
  const [consentModal, setConsentModal] = useState(false);
  const navigate = useNavigate();
  const locState = useLocation().state;
  const user_id = locState.user_id;
  const survey_data = locState.survey_data;

  const handleCheckbox = (e) => {
    SetConsent(!isConsent);
  };

  const onClickAgree = () => {
    if (isConsent) {
      axios
        .post(`${process.env.REACT_APP_SERVER}/survey`, {
          user_id: user_id,
          survey_data: survey_data,
        })
        .then((res) => {
          navigate('/event');
        })
        .catch((err) => console.log(err));
    } else {
      setConsentModal(true);
    }
  };

  const handleConsentModal = () => {
    setConsentModal(false);
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
      {consentModal ? (
        <Modal
          message="개인정보 수집 및 활용에 체크해주세요"
          onClick={handleConsentModal}
        />
      ) : null}
    </div>
  );
};
export default Consent;
