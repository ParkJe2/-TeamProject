import React from 'react';
import { St } from './CategoryStyle';
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';

const Tip = ({ code, posts }) => {
  const categoryPosts = posts.filter((post) => post.category === code);

  return (
    <div>
      <St.CategoryHeader>
        <St.CategotyTitle>술자리 팁</St.CategotyTitle>
        <St.CategorySubTitle>나만이 알고있는 술자리 팁을 공유해주세요 !</St.CategorySubTitle>
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

export default Tip;
