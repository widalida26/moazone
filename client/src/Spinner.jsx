import React, { useState } from 'react';
// import React from 'react';

const Spinner = () => {
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
      {/* <ul className={isSpin}>
        <div className="arrow"></div>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            1
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            2
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            3
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            4
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            5
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            6
          </div>
        </li> */}
      {/* <li>
          <div className="text" contentedtable="true" spellCheck="false">
            1
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            2
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            3
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            4
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            5
          </div>
        </li>
        <li>
          <div className="text" contentedtable="true" spellCheck="false">
            6
          </div>
        </li> */}
      {/* </ul>
      <button className="spin-button" onClick={() => setSpinning('circle spin')}>
        SPIN
      </button> */}
    </div>
  );
};
export default Spinner;
