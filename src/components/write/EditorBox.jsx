import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store';
import usePost from 'hooks/usePost';
import useInput from 'hooks/useInput';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { styled } from 'styled-components';

const EditorBox = () => {
  const navigate = useNavigate();
  const currentUser = useUserStore((state) => state.currentUser);
  // console.log(currentUser);

  const { addMutation } = usePost();
  // console.log(addMutation);

  const [title, onChangeTitle, setTitle] = useInput();
  const [body, onChangeBody, setBody] = useInput();
  const [category, onChangeCategory, setCategory] = useInput();

  const editorRef = useRef();
  //   console.log(editorRef.current);

  const onChangeGetHTML = () => {
    const data = editorRef.current.getInstance().getHTML();
    setBody(data);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();

    if (!title || !body) {
      return alert('내용을 입력해주세요');
    } else if (!category) {
      return alert('카테고리를 선택해주세요');
    }

    const newPost = {
      userId: currentUser.uid,
      title,
      body,
      likes: [],
      category
    };

    addMutation.mutate(newPost);

    setTitle('');
    setBody('');
    setCategory('');
  };

  const handleClickCancel = () => {
    if (window.confirm('글 작성을 취소하시겠습니까?')) {
      alert('이전 페이지로 이동하겠습니다.');
      navigate(-1);
    } else {
      alert('글 작성으로 돌아가겠습니다.');
    }
  };

  return (
    <WriteContainer>
      <WriteCancelButtonBox>
        <WriteCancelButton onClick={handleClickCancel}>취소</WriteCancelButton>
      </WriteCancelButtonBox>
      <form onSubmit={handleSubmitPost}>
        <WriteBox>
          <WriteCategory value={category} onChange={onChangeCategory}>
            <option>카테고리 선택</option>
            <option>술자리 팁</option>
            <option>건배사</option>
            <option>술 게임</option>
            <option>숙취해소법</option>
          </WriteCategory>
          <WriteTitle type="text" placeholder="제목을 입력해주세요" value={title} onChange={onChangeTitle} />
        </WriteBox>
        <Editor
          initialValue={body}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          hideModeSwitch="true"
          useCommandShortcut={false}
          usageStatistics={false}
          ref={editorRef}
          plugins={[colorSyntax]}
          language="ko-KR"
          onChange={onChangeGetHTML}
        />
        <WriteAddButtonBox>
          <WriteAddButton>작성</WriteAddButton>
        </WriteAddButtonBox>
      </form>
    </WriteContainer>
  );
};

export default EditorBox;

const WriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const WriteCancelButtonBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 90%;
`;

const WriteCancelButton = styled.button`
  font-size: 16px;
  color: #000000;
  /* background-color: #4b4b4b; */
  background-color: transparent;
  border: none;
  border-radius: 15px;
  padding: 7px 35px;
  cursor: pointer;

  &:hover {
    /* background-color: #bb3535; */
    font-weight: 600;
    /* font-style: italic; */
  }
`;

const WriteBox = styled.div`
  display: inline-flex;
  margin: 15px 0;
`;

const WriteCategory = styled.select`
  font-size: 14px;
  background-color: #f7f9fc;
  border: 1px solid #dbdde6;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
`;

const WriteTitle = styled.input`
  width: 886px;
  font-size: 18px;
  background-color: #f7f9fc;
  border: 1px solid #dbdde6;
  border-radius: 5px;
  padding: 7px;
`;

const WriteAddButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WriteAddButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #e24c4b;
  border: none;
  border-radius: 15px;
  margin: 50px 0;
  padding: 7px 35px;
  cursor: pointer;

  &:hover {
    background-color: #bb3535;
  }
`;
