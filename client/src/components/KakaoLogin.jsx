const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}&response_type=code`;

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img className="kakao-image" alt="kakao-login.png" src="/img/kakao_login2.png" />
      </a>
    </div>
  );
};

export default KakaoLogin;
