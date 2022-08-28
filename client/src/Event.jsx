import React, { useState } from 'react';

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
    <div>
      <div className="spin-content">
        <div className="image-wrap">
          <img className={isSpin} alt="spinner.png" src="/img/spinner.png" />
        </div>
        <div className="button-wrap">
          <button className="spin-button" onClick={setSpinning}>
            GO
          </button>
        </div>
        <div className="arrow-wrap">
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};
export default Event;
