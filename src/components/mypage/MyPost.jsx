import React, { useState } from 'react';
import { useRef } from 'react';

const MyPost = () => {
  const listRef = useRef();
  const [content, setContent] = useState('');

  const myPostList = () => {
    setContent(
      <div>
        <p>내가 쓴 글 1</p>
        <p>내가 쓴 글 2</p>
      </div>
    );
  };

  const myLikePostList = () => {
    setContent(
      <div>
        <p>좋아요한 글 1</p>
        <p>좋아요한 글 2</p>
      </div>
    );
  };

  return (
    <div
      style={{
        padding: '10px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex' }}>
        <span onClick={myPostList}>내가 쓴 글</span>
        <span style={{ marginLeft: '10px' }} onClick={myLikePostList}>
          좋아요 목록
        </span>
      </div>
      <div style={{ border: '2px solid gray', width: '1000px', height: '400px', padding: '10px' }} ref={listRef}>
        {content}
      </div>
    </div>
  );
};

export default MyPost;
