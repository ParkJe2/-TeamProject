import React, { useState, useRef } from 'react';
import { St } from './MyPostStyle';
import { useQuery } from 'react-query';
import { getMyPosts, getMyLikes } from 'api/myPost';
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';
import { getProfile } from 'api/profile';

const PAGE_SIZE = 5;

const MyPost = () => {
  const listRef = useRef();
  const [myPostsActive, setMyPostsActive] = useState(true);
  const [likedPostsActive, setLikedPostsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data: myPostsData,
    isLoading: myPostsLoading,
    error: myPostsError,
    refetch: refetchMyPosts
  } = useQuery('posts', getMyPosts, {});

  const {
    data: likedPostsData,
    isLoading: likedPostsLoading,
    error: likedPostsError,
    refetch: refetchLikedPosts
  } = useQuery('likes', getMyLikes, {
    refetchOnWindowFocus: false
  });

  const { data: member } = useQuery('members', getProfile, {
    refetchOnWindowFocus: false
  });

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const renderPosts = (posts) => {
    if (!posts) {
      return <div>No posts available.</div>;
    }
    const sortedPosts = posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return (
      <div>
        {sortedPosts.map((post) => (
          <div key={post.id}>
            <St.PostLink to={`/detail/${post.id}`}>
              <St.Lists>
                <St.ListDate>{dayjs(post.created_at).locale('kr').format('YYYY-MM-DD')}</St.ListDate>
                <St.ListTitleBox>
                  <St.ListCategory>{post.category}</St.ListCategory>
                  <St.ListTitle>{post.title}</St.ListTitle>
                </St.ListTitleBox>
                <St.ListWriterWrap>
                  <St.ListLikeBox>
                    <FaGlassCheers size="25" color="#eea100" />
                    <p>{post.likes.length}</p>
                  </St.ListLikeBox>
                  <St.ListProfileImgBox>
                    <St.ListProfileImg
                      alt="이미지 준비중"
                      src={myPostsActive ? member.user_metadata.profileImg : post.profileImg}
                    ></St.ListProfileImg>
                  </St.ListProfileImgBox>
                  <St.ListNickname>{myPostsActive ? member.user_metadata.nickname : post.nickname}</St.ListNickname>
                </St.ListWriterWrap>
              </St.Lists>
            </St.PostLink>
          </div>
        ))}
      </div>
    );
  };

  const handleMyPostsClick = () => {
    setMyPostsActive(true);
    setLikedPostsActive(false);
    refetchMyPosts();
  };

  const handleMyLikedPostsClick = () => {
    setMyPostsActive(false);
    setLikedPostsActive(true);
    refetchLikedPosts();
  };

  const renderContent = () => {
    let postsData, pageCount;

    if (myPostsActive) {
      postsData = myPostsData;
    } else if (likedPostsActive) {
      postsData = likedPostsData;
    }

    if (postsData) {
      const paginatedPosts = postsData.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
      pageCount = Math.ceil(postsData.length / PAGE_SIZE);
      return (
        <div>
          {renderPosts(paginatedPosts, member)}
          <St.Paginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            activeClassName={'active'}
          />
        </div>
      );
    }

    return <div>No posts available.</div>;
  };

  if (myPostsLoading || likedPostsLoading) {
    return <div>Loading...</div>;
  }

  if (myPostsError || likedPostsError) {
    return <div>Error...</div>;
  }

  return (
    <St.MyPostContainer>
      <St.PostList>
        <St.ListBtn onClick={handleMyPostsClick} autoFocus>
          내가 쓴 글
        </St.ListBtn>
        <St.ListBtn onClick={handleMyLikedPostsClick}>좋아요 목록</St.ListBtn>
      </St.PostList>
      <St.ListBox ref={listRef}>{renderContent()}</St.ListBox>
    </St.MyPostContainer>
  );
};

export default MyPost;
