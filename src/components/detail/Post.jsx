import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetail } from 'api/post';
import usePost from 'hooks/usePost';
import useInput from 'hooks/useInput';
import Share from './Share';
import Likes from './Likes';

const Post = () => {
  const params = useParams();

  const { data: posts, isLoading, isError } = useQuery('posts', () => getDetail(params.postId));
  const { deleteMutation, updateMutation } = usePost();

  const [title, handleOnChangeTitle, setTitle] = useInput();
  const [body, handleOnChangeBody, setBody] = useInput();
  const [isEdit, setIsEdit] = useState(false);

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
    <div>
      {posts.map((post) => {
        return (
          <div
            style={{
              border: '2px solid black',
              margin: '10px',
              padding: '10px'
            }}
            key={post.id}
          >
            <Link to={`/category`}>
              <button>카테고리로</button>
            </Link>
            <div
              style={{
                display: 'flex',
                alignItems: 'right',
                justifyContent: 'right'
              }}
            >
              <button onClick={() => handleDeletePost(post.id)}>삭제</button>
              <button onClick={() => handleUpdatePost(post)}>{isEdit ? '저장' : '수정'}</button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {isEdit ? (
                  <textarea type="text" placeholder="제목 입력" value={title} onChange={handleOnChangeTitle} />
                ) : (
                  <div>제목 : {post.title}</div>
                )}
                <div>작성자: {post.writer} </div>
              </div>
              <div>날짜 : {post.created_at}</div>
            </div>
            {isEdit ? (
              <textarea type="text" placeholder="제목 입력" value={body} onChange={handleOnChangeBody} />
            ) : (
              <div
                style={{
                  height: '200px',
                  border: '1px solid black',
                  margin: '5px',
                  padding: '10px'
                }}
              >
                내용 : {post.body}
              </div>
            )}
            <Likes />
            <Share />
          </div>
        );
      })}
    </div>
  );
};

export default Post;
