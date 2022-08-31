import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CgSpinnerTwo } from 'react-icons/cg';

const Header = () => {
  const navigate = useNavigate();

  const onClickHeader = () => {
    navigate('/');
  };

  return (
    <div className="header-container" onClick={onClickHeader}>
      <div className="header-text">LUCKY ROULLETE</div>
      <div className="logo-container">
        <CgSpinnerTwo size="50" color="#2bc0e4" />
      </div>
    </div>
  );
};
export default Header;
