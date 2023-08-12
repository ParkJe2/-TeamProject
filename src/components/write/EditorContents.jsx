import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

const EditorContents = ({ body, setBody }) => {
  const editorRef = useRef();

  const onChangeGetHTML = () => {
    const data = editorRef.current.getInstance().getHTML();
    setBody(data);
  };

  return (
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
  );
};

export default EditorContents;
