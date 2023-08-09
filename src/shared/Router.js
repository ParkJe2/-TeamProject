import { useEffect } from 'react';
import supabase from 'lib/supabaseClient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// page
import Login from 'pages/Login';
import Join from 'pages/Join';
import Main from '../pages/Main';
import Category from 'pages/Category';
import Detail from 'pages/Detail';
import Write from 'pages/Write';
import AuthRoute from './AuthRoute';
import Layout from './Layout';
import { useUserStore } from 'store';
import Mypage from 'pages/Mypage';

const Router = () => {
  const { addCurrentUser, deleteCurrentUser } = useUserStore((state) => state);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        addCurrentUser({
          uid: session.user.id,
          email: session.user.email,
          email: session.user.email,
          nickname: session.user.user_metadata.nickname,
          profileImg: session.user.user_metadata.profileImg
        });
      } else {
        deleteCurrentUser();
      }
    });

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        addCurrentUser({
          uid: session.user.id,
          email: session.user.email,
          nickname: session.user.user_metadata.nickname,
          profileImg: session.user.user_metadata.profileImg
        });
      } else {
        deleteCurrentUser();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 조회
  const currentUser = useUserStore((state) => state.currentUser);
  // console.log('주스탠드 => ', currentUser);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<AuthRoute component={<Mypage />} authenticated={currentUser} />} />
          <Route path="/" element={<Main />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail/:postId" element={<Detail />} />
          <Route path="/write" element={<AuthRoute component={<Write />} authenticated={currentUser} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
