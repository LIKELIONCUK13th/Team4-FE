import React, { useState } from 'react';
import './styles.css';
import logo from './logo.png'; // 로고 이미지는 src 폴더에 logo.png 파일을 넣어주세요.

function LoginPage({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼 클릭 시 호출될 함수
  const handleLogin = () => {
    alert(`로그인 시도: 이메일 = ${email}, 비밀번호 = ${password}`);
  };

  return (
    <div className="page-container">
      {/* 로고 */}
      <img src={logo} alt="로고" className="logo" />

      {/* 이메일 입력 */}
      <input
        type="email"
        placeholder="이메일"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* 비밀번호 입력 */}
      <input
        type="password"
        placeholder="비밀번호"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* 로그인 버튼 */}
      <button className="auth-button" onClick={handleLogin}>
        로그인
      </button>

      {/* 회원가입 링크 */}
      <div className="link-text" onClick={onSwitch}>
        회원가입
      </div>
    </div>
  );
}

export default LoginPage;
