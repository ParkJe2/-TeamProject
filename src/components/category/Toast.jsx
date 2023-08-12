import React from 'react';
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';
import { St } from './CategoryStyle';

const Toast = ({ code, posts }) => {
  const categoryPosts = posts.filter((post) => post.category === code);

  return (
    <div>
      <St.CategoryHeader>
        <St.CategotyTitle>건배사</St.CategotyTitle>
        <St.CategorySubTitle>모두에 앞에서 센스쟁이가 될 수 있는 재밌는 건배사를 공유해주세요 !</St.CategorySubTitle>
      </St.CategoryHeader>
      <St.WriteBtn to={`/write`}>글 작성하기</St.WriteBtn>
      <St.PostListWrap>
        {categoryPosts.map((post) => (
          <St.PostList key={post.id} to={`/detail/${post.id}`}>
            <St.PostTime>{dayjs(post.created_at).format('YYYY-MM-DD')}</St.PostTime>
            <St.PostTitle key={post.id}>{post.title}</St.PostTitle>
            <St.PostRight>
              <St.ListLikeBox>
                <FaGlassCheers size="25" color="#eea100" />
                <p>{post.likes.length}</p>
              </St.ListLikeBox>
              <St.ListProfileImgBox>
                <St.ListProfileImg alt="이미지 준비중" src={post.profileImg}></St.ListProfileImg>
              </St.ListProfileImgBox>
              <St.PostUser>{post.nickname}</St.PostUser>
            </St.PostRight>
          </St.PostList>
        ))}
      </St.PostListWrap>
    </div>
  );
};

export default Toast;
