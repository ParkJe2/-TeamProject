import supabase from 'lib/supabaseClient';
import React from 'react';

const LoginUtil = ({ currentUser }) => {
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      {currentUser?.email}
      <button onClick={signOut}>로그아웃</button>
    </div>
  );
};

export default LoginUtil;
