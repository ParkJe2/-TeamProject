import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutUtil = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default LogoutUtil;
