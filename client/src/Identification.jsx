import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import KakaoLogin from './components/KakaoLogin';

function Identification() {
  const enterGuideA = 'Lucky Roullete 이벤트는 카카오 로그인을 통해서 진행할 수 있습니다';
  const enterGuideB =
    '입력된 개인정보는 오로지 이벤트 중복 참여 방지를 위해서만 사용됩니다';

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
    </div>
  );
}

export default Identification;
