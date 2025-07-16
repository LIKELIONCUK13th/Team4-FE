import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './styles.css';

function App() {
  const [page, setPage] = useState('login'); // 현재 화면 상태: 'login' 또는 'signup'

  // 화면 전환 함수
  const switchPage = () => {
    setPage(page === 'login' ? 'signup' : 'login');
  };

  return (
    <div>
      {page === 'login' ? (
        <LoginPage onSwitch={switchPage} />
      ) : (
        <SignupPage onSwitch={switchPage} />
      )}
    </div>
  );
}

export default App;
