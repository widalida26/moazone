import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const KakaoCode = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    axios
      .post('http://localhost:8000/auth/kakao', { authcode: KAKAO_CODE })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === 'already existed') console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return <div></div>;
};

export default KakaoCode;
