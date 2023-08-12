import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getDetail, updateLikes } from 'api/post';
import { useUserStore } from 'store';
import usePost from 'hooks/usePost';
import { FaGlassCheers } from 'react-icons/fa';
import { St } from './ShareLikesStyle';

const Likes = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);

  const { data: posts, isLoading, isError } = useQuery('likes', () => getDetail(params.postId));
  // const { updateLikesMutation } = usePost();
  const queryClient = useQueryClient();

  const updateLikesMutation = useMutation(updateLikes, {
    onMutate: async (updateLikes) => {
      console.log('onMutate 호출');
      await queryClient.cancelQueries('likes');

      const previousPosts = queryClient.getQueriesData('likes');

      queryClient.setQueryData('likes', (prev) => [...prev, updateLikes]);

      return { previousPosts };
    },

    onError: (err, updateLikes, context) => {
      console.log('onError', err);
      queryClient.setQueryData('likes', context.previousPosts);
    },

    onSettled: () => {
      console.log('onSettled');
      queryClient.invalidateQueries('likes');
    }

    // onSuccess: () => {
    //   queryClient.invalidateQueries('likes');
    // }
  });

  const handleUpdateLikes = (post) => {
    if (!post.likes.includes(currentUser?.uid) && currentUser) {
      const updateLikesUser = {
        ...post,
        likes: [...post.likes, currentUser?.uid]
      };
      updateLikesMutation.mutate(updateLikesUser);
    } else if (post.likes.includes(currentUser?.uid) && currentUser) {
      const updateLikesUser = {
        ...post,
        likes: post.likes.filter((userId) => userId !== currentUser?.uid)
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
    <div>
      {posts.map((post, index) => {
        return (
          <St.LikesButtonBox key={index}>
            <FaGlassCheers
              size="32"
              color={post.likes.includes(currentUser?.uid) ? '#EEA100' : '#000000'}
              cursor="pointer"
              onClick={() => handleUpdateLikes(post)}
              // onClick={handleUpdateLikes(post)}
            />
            <St.LikesCount>{post.likes.length ? post.likes.length : 0}</St.LikesCount>
          </St.LikesButtonBox>
        );
      })}
    </div>
  );
};

export default Likes;
