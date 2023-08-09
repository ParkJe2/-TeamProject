import Header from 'components/Header/Header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
