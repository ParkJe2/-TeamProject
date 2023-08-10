import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetail } from 'api/post';
import { useUserStore } from 'store';
import usePost from 'hooks/usePost';

const Like = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);

  const { data: posts, isLoading, isError } = useQuery('likes', () => getDetail(params.postId));
  const { updateLikesMutation } = usePost;
  // console.log(posts[0].likes);

  const handleUpdateLikes = () => {
    if (!posts[0].likes.includes(currentUser?.uid)) {
      const updateLikesUser = {
        ...posts[0],
        likes: [...posts[0].likes, currentUser?.uid]
      };
      updateLikesMutation.mutate(updateLikesUser);
    } else {
      const updateLikesUser = {
        ...posts[0],
        likes: posts[0].likes.filter((userId) => userId !== currentUser?.uid)
      };
      updateLikesMutation.mutate(updateLikesUser);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <button onClick={handleUpdateLikes}>{posts[0].likes.includes(currentUser?.uid) ? '❤️' : '🖤'}</button>
      {posts[0].likes.length ? posts[0].likes.length : 0}
    </div>
  );
};

export default Like;
