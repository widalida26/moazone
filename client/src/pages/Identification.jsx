import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import KakaoLogin from '../components/KakaoLogin';
import Modal from '../components/Modal';
import Header from '../components/Header';

function Identification() {
  const navigate = useNavigate();

  const [isExisted, setIsExisted] = useState(false);

  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const additionalGuideList = [
    '럭키 룰렛 이벤트는 카카오 로그인을 통해서만 진행할 수 있습니다',
    '입력된 개인정보는 이벤트 중복 참여 방지를 위해서만 사용됩니다',
  ];

  const getKakaoToken = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/auth`, { authcode: KAKAO_CODE })
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

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

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
          <KakaoLogin />
          {/* <NaverLogin /> */}
        </div>
      </div>
      {isExisted ? (
        <Modal message="이미 이벤트에 참여하셨습니다" onClick={onClickModalButton} />
      ) : null}
    </div>
  );
}

export default Identification;
