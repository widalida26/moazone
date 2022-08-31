import React, { useState } from 'react';
import Header from '../components/Header';

const Event = () => {
  const [isSpin, setIsSpin] = useState('spinner off');

  const setSpinning = () => {
    if (isSpin === 'spinner off') {
      setIsSpin('spinner on');
    } else {
      setIsSpin('spinner off');
    }
  };

  return (
    <div className="event-container">
      <Header />
      <div className="spinner-container">
        <img className={isSpin} alt="spinner.png" src="/img/spinner2.png" />
        <div className="spin-button-container">
          <button className="spin-button" onClick={setSpinning}>
            GO
          </button>
        </div>
      </div>
    </div>
  );
};
export default Event;
