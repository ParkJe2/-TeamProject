import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getDetail, getLikes, getPosts, updateLikes } from 'api/post';
import { useParams } from 'react-router-dom';
import { useUserStore } from 'store';

const Like = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);
  // console.log(currentUser?.uid);

  // const { data: likes, isLoading, isError } = useQuery('likes', () => getLikes(params.postId));

  // console.log(typeof likes);
  // console.log(likes[0].length);

  const { data: posts, isLoading, isError } = useQuery('likes', () => getDetail(params.postId));

  // console.log(posts[0].likes);
  // console.log(posts[0].likes.length);

  // console.log(posts);

  const queryClient = useQueryClient();
  const updateLikesMutation = useMutation(updateLikes, {
    // onSuccess: () => {
    //   console.log('onSuccess');
    //   queryClient.invalidateQueries('posts');
    // }

    // 가장 먼저 실행돼서 UI를 우선 바꿈
    onMutate: async (updatePost) => {
      console.log('onMutate 호출');
      // posts에 쿼리가 있으면 queryClient.cancelQueries를 사용해 일단 먼저 취소 시켜놓고 ...?
      await queryClient.cancelQueries('likes');

      // queryClient.getQueriesData를 사용하여 현재 캐시에 들어있는 데이터를 previousPosts 변수에 백업
      const previousPosts = queryClient.getQueriesData('likes');

      // prev === previousPosts // previousPosts에 newPost를 합침
      queryClient.setQueryData('likes', (prev) => [...prev, updatePost]);

      // return 값인 previousPosts === onError의 세번째 인자인 context !
      return { previousPosts };
    },

    onError: (err, updatePost, context) => {
      console.log('onError');
      console.log('context:', context);
      // updateLikes가 실패하면 빠르게 원상복구하기 위한 코드
      // queryClient를 통해 setQueryData를 하는 것은 네트워크와 관련없이 클라이언트 내부적으로 발생하는 로직
      queryClient.setQueryData('likes', context.previousPosts);
    },

    // 실패를 하든 성공을 하든 실행하는 코드
    onSettled: () => {
      console.log('onSettled');
      // DB에 있는 내용을 캐시 데이터에도 갱신(적용)하기 위한 코드 !무효화!
      queryClient.invalidateQueries('likes');
    }
  });

  // const [isLiked, setIsLiked] = useState(false);
  // const userLikesIndex = posts[0].likes.indexOf(currentUser?.uid);

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

    // if (!isLiked) {
    //   const updateLikesUser = {
    //     ...posts[0],
    //     likes: [...posts[0].likes, currentUser?.uid]
    //   };
    //   setIsLiked(true);
    //   updateLikesMutation.mutate(updateLikesUser);
    // } else if (isLiked && userLikesIndex !== -1) {
    //   const updatedLikes = [...posts[0].likes];
    //   updatedLikes.splice(userLikesIndex, 1);
    //   const updateLikesUser = {
    //     ...posts[0],
    //     likes: updatedLikes
    //   };
    //   setIsLiked(false);
    //   updateLikesMutation.mutate(updateLikesUser);
    // }
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
      {/* <button onClick={handleUpdateLikes}>{isLiked ? '취소' : '좋아요'}</button> */}
      <button onClick={handleUpdateLikes}>{posts[0].likes.includes(currentUser?.uid) ? '취소' : '좋아요'}</button>
      {posts[0].likes.length ? posts[0].likes.length : 0}
    </div>
  );
};

export default Like;
