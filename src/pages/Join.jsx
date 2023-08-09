import useInput from 'hooks/useInput';
import supabase from 'lib/supabaseClient';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();

  const [email, onChangeEmailHandler] = useInput();
  const [password, setPassword] = useInput();
  const [passwordConfirm, setPasswordConfirm] = useInput();
  const [nickname, onChangeNicknameHandler] = useInput();

  // 에러메세지 -추가예정
  const [emailError, setEmailError] = useState('');
  const [passWordError, setPassWordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  // 파일 업로드
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState('');

  const signUp = async (event) => {
    event.preventDefault();
    console.log(email, password, nickname, selectedFile);

    try {
      // 프로필이미지 storage에 업로드
      const fileName = `./${email}/${selectedFile.name}`;
      const { data: imgData, error: imgError } = await supabase.storage.from('profile').upload(fileName, selectedFile, {
        upsert: true
      });

      const PROFILE_BASE_URL = 'https://nogglsilnolluhkmrvqx.supabase.co/storage/v1/object/public/profile/';

      if (imgError) {
        console.error(imgError);
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nickname,
            profileImg: PROFILE_BASE_URL + fileName
          }
        }
      });

      if (data) {
        navigate('/');
        alert('회원가입이 완료되었습니다!');
      } else if (error) console.error(error);
    } catch (error) {
      console.error(error);
    }
  };

  // 이미지 미리보기
  const handleFileSelect = async (event) => {
    const theFile = event.target.files[0];

    setSelectedFile(theFile);

    if (theFile) {
      // 프로필이미지 미리보기
      const reader = new FileReader();
      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result }
        } = finishedEvent;
        setPreviewImg(result);
      };
      reader.readAsDataURL(theFile);
    } else {
      // setPreviewImg(DEFAULT_URL);
      setPreviewImg('');
    }
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <div>
          <label>이메일</label>
          <div>
            <input type="email" value={email} name="email" onChange={onChangeEmailHandler} required />
            <small>{emailError}</small>
          </div>
        </div>
        <div>
          <label>비밀번호</label>
          <div>
            <input
              type="password"
              // ref={passwordRef}
              // value={password}
              name="password"
              onChange={setPassword}
              placeholder="영문, 숫자 조합 8자리 이상 입력"
              required
            />
            <small>{passWordError}</small>
          </div>
        </div>
        {/* <div>
          <label>비밀번호 확인</label>
          <div>
            <input
              type="password"
              // ref={passwordConfirmRef}
              // value={passwordConfirm}
              name="passwordConfirm"
              onChange={setPasswordConfirm}
              placeholder="비밀번호 확인"
              required
            />
            <small>{passwordConfirmError}</small>
          </div>
        </div> */}

        <div>
          <label>닉네임</label>
          <div>
            <input type="text" value={nickname} name="nickname" onChange={onChangeNicknameHandler} />
          </div>
          {/* <small>info: {nicknameConfirmError}</small> */}
        </div>

        <div>
          <label>프로필사진</label>
          <div>
            <div>
              <img src={previewImg} alt="프로필 사진" />
            </div>
            <input type="file" onChange={handleFileSelect} />
          </div>
        </div>
        <div>
          <button>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default Join;
