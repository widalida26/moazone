import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const mainButtonText = '>>>  CLICK HERE <<<';

  const onClickMainButton = () => {
    navigate('/identification');
  };

  return (
    <div className="main-container">
      <div className="img-container">
        <img className="main-image" alt="main.png" src="/img/main7.png"></img>
      </div>
      <button className="main-button enter-button" onClick={onClickMainButton}>
        {mainButtonText}
      </button>
    </div>
  );
};

export default Main;
