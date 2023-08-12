import { styled } from 'styled-components';

export const St = {
  CommentsTitle: styled.div`
    font-size: 21px;
    font-weight: 700;
    margin: 0 0 20px 30px;
  `,

  CommentsAddForm: styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  `,

  CommentsTextarea: styled.textarea`
    width: 88%;
    border-radius: 10px;
    margin-right: 20px;
    padding: 10px;
  `,

  CommentsAddButton: styled.button`
    font-size: 16px;
    color: #ffffff;
    background-color: #e24c4b;
    border: none;
    border-radius: 15px;
    padding: 6px 20px;
    cursor: pointer;

    &:hover {
      background-color: #bb3535;
    }
  `,

  CommentsBox: styled.div`
    position: relative;
    display: flex;
    border-bottom: 1px dashed #a4a3a3e4;
    margin-top: 5px;
    padding: 10px 25px;
  `,

  CommentsUserInfoBox: styled.div`
    width: 65px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  `,

  CommentsImageBox: styled.div`
    width: 40px;
    height: 40px;
    border-radius: 70px;
    overflow: hidden;
  `,

  CommentsUserProfileImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    image-rendering: crisp-edges;
  `,

  CommentsUserNickname: styled.div`
    font-size: 14px;
  `,

  CommentsContentsBox: styled.div`
    width: 90%;
    padding: 10px 20px;
  `,

  CommentsDate: styled.div`
    color: #616161e5;
    font-size: 14px;
    margin-bottom: 15px;
  `,

  CommentsBody: styled.div`
    width: 93%;
    word-wrap: break-word;
  `,

  CommentsDeleteButton: styled.button`
    position: absolute;
    top: 40%;
    right: 2%;
    height: 26px;
    font-size: 14px;
    color: #ffffff;
    background-color: #515151;
    border: none;
    border-radius: 10px;
    padding: 3px 10px;
    cursor: pointer;

    &:hover {
      background-color: #343434;
    }
  `
};
