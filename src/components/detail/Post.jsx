import React, { useState } from 'react';
import { useUserStore } from 'store';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetail } from 'api/post';
import usePost from 'hooks/usePost';
import useInput from 'hooks/useInput';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Share from './Share';
import Likes from './Likes';
import EditorContents from 'components/write/EditorContents';
import WriteContents from 'components/write/WriteContents';
import { St } from './PostStyle';

const Post = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);

  const { data: posts, isLoading, isError } = useQuery('posts', () => getDetail(params.postId));
  const { deleteMutation, updateMutation } = usePost();

  const [title, onChangeTitle, setTitle] = useInput();
  const [body, onChangeBody, setBody] = useInput();
  // const [category, onChangeCategory, setCategory] = useInput();
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

      post.body = body;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <St.PostContainer>
      <St.PostWrapper>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              {currentUser?.uid === post.userId && (
                <St.PostButtonBox>
                  <St.PostButton onClick={() => handleUpdatePost(post)}>{isEdit ? '저장' : '수정'}</St.PostButton>
                  <St.PostButton onClick={() => handleDeletePost(post.id)}>삭제</St.PostButton>
                </St.PostButtonBox>
              )}
              <St.PostTitleBox>
                {!isEdit && (
                  <>
                    <St.PostTitle>{post.title}</St.PostTitle>
                    <St.PostDate>{dayjs(post.created_at).locale('kr').format(`YYYY-MM-DD HH:mm`)}</St.PostDate>
                  </>
                )}
              </St.PostTitleBox>
              {isEdit ? (
                <>
                  <WriteContents title={title} onChangeTitle={onChangeTitle} />
                  <EditorContents body={body} setBody={setBody} />
                </>
              ) : (
                <>
                  <St.PostBody>
                    <Viewer initialValue={post.body} />
                  </St.PostBody>
                  <St.PostBottomBox>
                    <St.PostUserBox>
                      <St.PostUserProfileImg src={post.profileImg} />
                      {post.nickname}
                    </St.PostUserBox>
                    <St.PostShareLikeBox>
                      <Likes />
                      <Share />
                    </St.PostShareLikeBox>
                  </St.PostBottomBox>
                </>
              )}
            </div>
          );
        })}
      </St.PostWrapper>
    </St.PostContainer>
  );
};

export default Post;
