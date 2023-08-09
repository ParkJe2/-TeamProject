import React from 'react';
import { useUserStore } from 'store';
import LoginUtil from './LoginUtil';
import LogoutUtil from './LogoutUtil';

const Header = () => {
  // 조회
  const currentUser = useUserStore((state) => state.currentUser);
  //   console.log('주스탠드 => ', currentUser);

  return (
    <div>
      HeaderMenu...
      {currentUser ? <LoginUtil currentUser={currentUser} /> : <LogoutUtil />}
    </div>
  );
};

export default Header;
