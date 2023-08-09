import useInput from 'hooks/useInput';
import supabase from 'lib/supabaseClient';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, onChangeEmailHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  const signInWithEmail = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (data) {
        console.log('data => ', data);
        navigate('/');
      } else if (error) console.error(error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={signInWithEmail}>
          <div>
            <input
              type="email"
              value={email}
              name="email"
              onChange={onChangeEmailHandler}
              placeholder="이메일"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              value={password}
              name="password"
              onChange={onChangePasswordHandler}
              placeholder="비밀번호"
              required
            ></input>
          </div>
          <button>로그인</button>
          <Link to="/join">회원가입</Link>
        </form>
      </div>
    </>
  );
};

export default Login;
