import { styled } from 'styled-components';

export const St = {
  PageContainer: styled.div`
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  `,
  ProfileWarp: styled.div`
    width: 30%;
    float: left;
    height: 100%;
    text-align: center;
    display: inline-grid;
    align-content: center;
    box-sizing: border-box;
  `,

  MyPostWarp: styled.div`
    width: 70%;
    float: right;
    margin-top: 30px;
  `,

  ProfileImageBox: styled.div`
    margin: auto;
    width: 180px;
    height: 180px;
    overflow: hidden;
    margin-bottom: 30px;
    border-radius: 100%;
    background-color: #d9d9d9;
  `,
  ProfileImage: styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    image-rendering: crisp-edges;
  `,

  ImageInput: styled.input`
    display: none;
  `,

  ContentsBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ContentsForm: styled.form`
    gap: 18px;
    display: flex;
    flex-direction: column;
  `,

  ContentsLabel: styled.label`
    font-size: 14px;
  `,

  ContentsInput: styled.input`
    width: 160px;
    height: 30px;
    outline: none;
    font-size: 13px;
    margin-left: 10px;
    border-radius: 5px;
    padding-left: 10px;
    border: 1px solid gray;
    background-color: white;
  `,

  NicknameChangeBtn: styled.button`
    width: 90px;
    height: 30px;
    margin: auto;
    border: none;
    outline: none;
    color: white;
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 15px;
    background-color: #e24c4b;
  `
};
