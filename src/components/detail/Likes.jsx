import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getDetail, updateLikes } from 'api/post';
import { useParams } from 'react-router-dom';

const Like = () => {
  const params = useParams();

  const { data: posts, isLoading, isError } = useQuery('posts', () => getDetail(params.postId));

  const queryClient = useQueryClient();
  const updateLikesMutation = useMutation(updateLikes, {
    onSuccess: () => {
      console.log('onSuccess');
      queryClient.invalidateQueries('posts');
    }

    // // 가장 먼저 실행돼서 UI를 우선 바꿈
    // onMutate: async (newPost) => {
    //   console.log('onMutate 호출');
    //   // posts에 쿼리가 있으면 queryClient.cancelQueries를 사용해 일단 먼저 취소 시켜놓고 ...?
    //   await queryClient.cancelQueries('posts');

    //   // queryClient.getQueriesData를 사용하여 현재 캐시에 들어있는 데이터를 previousPosts 변수에 백업
    //   const previousPosts = queryClient.getQueriesData('posts');

    //   // prev === previousPosts // previousPosts에 newPost를 합침
    //   queryClient.setQueryData('posts', (prev) => [...prev, newPost]);

    //   // return 값인 previousPosts === onError의 세번째 인자인 context !
    //   return { previousPosts };
    // },

    // onError: (err, newPost, context) => {
    //   console.log('onError');
    //   console.log('context:', context);
    //   // updateLikes가 실패하면 빠르게 원상복구하기 위한 코드
    //   // queryClient를 통해 setQueryData를 하는 것은 네트워크와 관련없이 클라이언트 내부적으로 발생하는 로직
    //   queryClient.setQueryData('posts', context.previousPosts);
    // },

    // // 실패를 하든 성공을 하든 실행하는 코드
    // onSettled: () => {
    //   console.log('onSettled');
    //   // DB에 있는 내용을 캐시 데이터에도 갱신(적용)하기 위한 코드 !무효화!
    //   queryClient.invalidateQueries('posts');
    // }
  });

  // const [likesCount, setLikesCount] = useState(posts[0].likes.length);
  const [isLiked, setIsLiked] = useState(false);

  console.log(isLiked);

  const handleUpdateLikes = () => {
    // let value = posts[0].likes.length;

    if (!isLiked) {
      const updateLikesUser = {
        ...posts[0],
        likes: [...posts[0].likes, posts[0].userId]
      };
      console.log(posts[0].userId);
      setIsLiked(true);
      updateLikesMutation.mutate(updateLikesUser);
    } else if (isLiked) {
      const updateLikesUser = {
        ...posts[0],
        likes: [...posts[0].likes]
      };
      setIsLiked(false);
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
      <button onClick={handleUpdateLikes}>{isLiked ? '취소' : '좋아요'}</button>
      {posts[0].likes.length}
    </div>
  );
};

export default Like;
