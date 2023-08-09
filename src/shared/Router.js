import { BrowserRouter, Route, Routes } from 'react-router-dom';
// page
import Login from 'pages/Login';
import Join from 'pages/Join';
import Main from '../pages/Main';
import Category from 'pages/Category';
import Detail from 'pages/Detail';
import Write from 'pages/Write';
import MyPage from 'pages/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
