import React, { useState } from 'react';
import './styles.css';
import logo from './logo.png'; // 같은 이미지 사용

function SignupPage({ onSwitch }) {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const handleSignup = () => {
    if (pw !== pwCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert(`회원가입 시도: 닉네임=${nickname}, 이메일=${email}`);
  };

  return (
    <div className="page-container">
      {/* 로고 */}
      <img src={logo} alt="로고" className="logo" />

      {/* 안내 문구 */}
      <div className="signup-description">
        3초 안에 가입하고,<br />
        친구와 일기를 공유해보세요!
      </div>

      {/* 입력 필드들 */}
      <input
        type="text"
        placeholder="닉네임"
        className="input-field"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <input
        type="email"
        placeholder="이메일"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="비밀번호"
        className="input-field"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      <input
        type="password"
        placeholder="비밀번호 확인"
        className="input-field"
        value={pwCheck}
        onChange={(e) => setPwCheck(e.target.value)}
      />

      {/* 회원가입 버튼 */}
      <button className="auth-button" onClick={handleSignup}>
        회원가입
      </button>

      
    </div>
  );
}

export default SignupPage;
