import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from 'lib/supabaseClient';
// style
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';
import { St } from './PopularStyle';

const PopularPosts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data, error } = await supabase.from('posts').select();

      if (error) {
        console.log(error);
      }

      if (data) {
        setPosts(data);
      }
    };

    getPosts();
  }, []);

  const popularPosts = posts.sort((a, b) => b.likes.length - a.likes.length).slice(0, 10);

  return (
    <St.PopularContainer>
      <St.PopularTitle>인기 게시글</St.PopularTitle>
      {popularPosts.map((post, index) => {
        return (
          <St.PopularRateContainer key={post.id}>
            <St.PopularRateText>Top {index + 1}</St.PopularRateText>
            <St.PopularPost
              onClick={() => {
                navigate(`/detail/${post.id}`);
              }}
            >
              <St.PopularPostDate>{dayjs(post.created_at).locale('kr').format('YYYY-MM-DD')}</St.PopularPostDate>
              <St.PopularPostBody>
                <St.PopularPostCategory>{post.category}</St.PopularPostCategory>
                <St.PopularPostTitle>{post.title}</St.PopularPostTitle>
              </St.PopularPostBody>
              <St.PopularPostLike>
                <FaGlassCheers size="25" color="#eea100" />
                <St.PopularPostLikeNum>{post.likes.length}</St.PopularPostLikeNum>
              </St.PopularPostLike>
              <St.ListProfileImgBox>
                <St.ListProfileImg src={post.profileImg} />
              </St.ListProfileImgBox>
              <St.ListNickname>{post.nickname}</St.ListNickname>
            </St.PopularPost>
          </St.PopularRateContainer>
        );
      })}
    </St.PopularContainer>
  );
};

export default PopularPosts;
