import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  const navigate = useNavigate();
  const mainButtonText = '>>>  CLICK HERE <<<';

  const onClickMainButton = () => {
    navigate('/identification');
  };

  const onClickTestButton = () => {
    axios
      .get(`${process.env.REACT_APP_AUTH}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-container">
      <div className="img-container">
        <img className="main-image" alt="main.png" src="/img/main7.png"></img>
      </div>
      <button className="main-button enter-button" onClick={onClickMainButton}>
        {mainButtonText}
      </button>
      <button onClick={onClickTestButton}>test10:56</button>
    </div>
  );
};

export default Main;
