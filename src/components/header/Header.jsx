import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from 'store';
import { St } from './HeaderStyle';

import LoginUtil from './LoginUtil';
import LogoutUtil from './LogoutUtil';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 조회
  const currentUser = useUserStore((state) => state.currentUser);
  //   console.log('주스탠드 => ', currentUser);

  const clickLogo = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <St.HeaderContainer>
      <St.HeaderLogoImg src="/logo.png" onClick={clickLogo} />
      <St.CategoryWrapper>
        <St.CategoryLink to="/category/술자리 팁">술자리 팁</St.CategoryLink>
        <St.CategoryLink to="/category/건배사">건배사</St.CategoryLink>
        <St.CategoryLink to="/category/술 게임">술 게임</St.CategoryLink>
        <St.CategoryLink to="/category/숙취해소법">숙취해소법</St.CategoryLink>
      </St.CategoryWrapper>
      {currentUser ? <LoginUtil currentUser={currentUser} /> : <LogoutUtil />}
    </St.HeaderContainer>
  );
};

export default Header;
