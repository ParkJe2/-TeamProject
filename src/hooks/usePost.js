import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost, updateLikes, updatePost } from 'api/post';

const usePost = () => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });

  const updateMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });

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
  });

  return { deleteMutation, updateMutation, updateLikesMutation };
};

export default usePost;
