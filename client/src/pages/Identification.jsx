import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import KakaoLogin from '../components/KakaoLogin';
import Modal from '../components/Modal';

function Identification() {
  const navigate = useNavigate();

  const [isExisted, setIsExisted] = useState(false);

  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const enterGuideA = 'Lucky Roullete 이벤트는 카카오 로그인을 통해서 진행할 수 있습니다';
  const enterGuideB =
    '입력된 개인정보는 오로지 이벤트 중복 참여 방지를 위해서만 사용됩니다';

  const getKakaoToken = () => {
    axios
      .post('http://localhost:8000/auth/kakao', { authcode: KAKAO_CODE })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === 'already existed') {
          setIsExisted(true);
        }
        if (res.data.message === 'new user') {
          navigate('/survey');
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
      <div className="form-container">
        <div className="info-icon">
          <HiInformationCircle size="50" color="#1d98b6" />
        </div>
        <div className="input-guide">Lucky Roullete 이벤트 참여</div>
        <div className="additional-guide">{enterGuideA}</div>
        <div className="additional-guide">{enterGuideB}</div>
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
