import React, { useState } from 'react';
import { useUserStore } from 'store';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetail } from 'api/post';
import usePost from 'hooks/usePost';
import useInput from 'hooks/useInput';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import Share from './Share';
import Likes from './Likes';
import { styled } from 'styled-components';

const Post = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);

  const { data: posts, isLoading, isError } = useQuery('posts', () => getDetail(params.postId));
  const { deleteMutation, updateMutation } = usePost();

  const [title, handleOnChangeTitle, setTitle] = useInput();
  const [body, handleOnChangeBody, setBody] = useInput();
  const [isEdit, setIsEdit] = useState(false);

  console.log(posts);

  const handleDeletePost = (id) => {
    deleteMutation.mutate(id);
  };

  const handleUpdatePost = (post) => {
    if (!isEdit) {
      setIsEdit(true);
      setTitle(post.title);
      setBody(post.body);
    } else {
      const editedPost = {
        ...post,
        title,
        body
      };
      updateMutation.mutate(editedPost);
      setIsEdit(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <PostContainer>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <PostButtonBox>
              <PostButton onClick={() => handleDeletePost(post.id)}>삭제</PostButton>
              <PostButton onClick={() => handleUpdatePost(post)}>{isEdit ? '저장' : '수정'}</PostButton>
            </PostButtonBox>
            <div>
              <div>
                {isEdit ? (
                  <textarea type="text" placeholder="제목 입력" value={title} onChange={handleOnChangeTitle} />
                ) : (
                  <PostTitle>{post.title}</PostTitle>
                )}
                <div>작성자: {currentUser?.nickname} </div>
              </div>
              <div>{post.created_at}</div>
            </div>
            {isEdit ? (
              <textarea type="text" placeholder="제목 입력" value={body} onChange={handleOnChangeBody} />
            ) : (
              <div>
                내용 :
                <Viewer initialValue={post.body} />
              </div>
            )}
            <Likes />
            <Share />
          </div>
        );
      })}
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
`;

const PostButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0 0;
`;

const PostButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PostTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
