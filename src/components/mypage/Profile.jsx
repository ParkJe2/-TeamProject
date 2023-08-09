import React, { useState } from 'react';
import { getProfile, updateProfile } from 'api/profile';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import MyPost from './MyPost';

const Profile = () => {
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const queryClient = useQueryClient();
  const { data: members, isLoading, error } = useQuery('members', getProfile);

  const updateMutation = useMutation(updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('members');
    }
  });

  const nicknameChangeHandler = (e) => setNickname(e.target.value);
  const profileImageUpdate = (e) => setSelectedFile(e.target.files[0]);

  const nicknameUpdateBtn = async (member) => {
    if (!nickname) {
      alert('닉네임을 입력해주세요');
      return;
    }

    const updateNickname = {
      ...member,
      nickname
    };

    try {
      await updateMutation.mutateAsync(updateNickname);
      setIsUpdateProfile(false);
      alert('닉네임 변경 완료');
    } catch (error) {
      console.error('닉네임 변경 실패', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    // 테스트 코드
    <>
      <p style={{ padding: '10px' }}>[TEST DATA]</p>
      {members.map((member) => (
        <div style={{ padding: '10px' }} key={member.id}>
          <div style={{ width: '120px', height: '120px', borderRadius: '100%', overflow: 'hidden' }}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                imageRendering: '-webkit-optimize-contrast !important'
              }}
              alt="이미지 준비중"
              src={member.profileImage}
            ></img>
          </div>
          <input type="file" accept="image/*" onChange={profileImageUpdate} />
          <form onSubmit={(e) => e.preventDefault()}>
            <p>이메일</p>
            <input type="email" value={member.email} disabled />
            <p>닉네임</p>
            <input
              type="text"
              maxLength={6}
              defaultValue={isUpdateProfile ? nickname : member.nickname}
              onChange={nicknameChangeHandler}
            />
            <button style={{ marginLeft: '8px' }} onClick={() => nicknameUpdateBtn(member)}>
              닉네임 변경
            </button>
          </form>
        </div>
      ))}
      {/* 유저 정보 받아와서 사용할 기본 코드 */}
      {/* <div style={{ padding: '10px' }}>
        <img src={profileImage} alt="이미지 준비중" />
        <input type="file" />
        <form onSubmit={profileUpdateHandler}>
          <p>Email</p>
          <input type="email" placeholder={getProfile.email} disabled={true} />
          <p>Nickname</p>
          <input type="text" maxLength={6} value={nickname} onChange={nicknameChangeHandler} />
          <button type="submit" onClick={updateProfile}>
            프로필 수정
          </button>
        </form>
      </div> */}
      <MyPost />
    </>
  );
};
export default Profile;
