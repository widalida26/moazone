import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Consent = () => {
  const [isConsent, SetConsent] = useState(false);
  const navigate = useNavigate();

  const handleCheckbox = (e) => {
    SetConsent(!isConsent);
  };

  const onClickAgree = () => {
    if (isConsent) {
      navigate('/event');
    } else {
      console.log('동의하세요!');
    }
  };

  return (
    <div class="consent-container">
      <div class="info-guide">
        <img className="info-img" alt="consnet.png" src="/img/consent.png" />
      </div>
      <div class="check-container">
        <input
          class="checkbox"
          type="checkbox"
          value={isConsent}
          onChange={handleCheckbox}
        />
        I agree to collect/use personal information to participate in the event
        <button className="consent-button" onClick={onClickAgree}>
          AGREE
        </button>
      </div>
    </div>
  );
};
export default Consent;
