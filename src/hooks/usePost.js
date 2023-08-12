import { useMutation, useQueryClient } from 'react-query';
import { addPost, deletePost, updateLikes, updatePost } from 'api/post';
import { useNavigate } from 'react-router-dom';

const usePost = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const addMutation = useMutation(addPost, {
    onSuccess: () => {
      alert('글이 작성되었습니다');
      queryClient.invalidateQueries('posts');
      navigate(-1);
    }
  });

  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      navigate(`/`);
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

  return { addMutation, deleteMutation, updateMutation, updateLikesMutation };
};

export default usePost;
