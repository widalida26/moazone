import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';

const KakaoCode = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/auth/kakao`, { authcode: KAKAO_CODE })
      .then((res) => {
        if (res.data.message === 'already existed') console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return (
    <div>
      <Modal message="이미 이벤트에 참여하셨습니다" />
    </div>
  );
};

export default KakaoCode;
