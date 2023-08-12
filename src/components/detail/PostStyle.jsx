import { styled } from 'styled-components';

export const St = {
  PostContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  PostWrapper: styled.div`
    width: 90%;
    background-color: #ffffff;
    border-radius: 15px;
    margin: 40px 0 60px 0;
    padding: 20px 30px;
  `,

  PostButtonBox: styled.div`
    display: flex;
    justify-content: flex-end;
  `,

  PostButton: styled.button`
    font-size: 18px;
    background-color: transparent;
    border: none;
    margin-left: 15px;
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  `,

  PostTitleBox: styled.div`
    border-bottom: 1px solid #a1a1a1bf;
    padding: 0 0 15px 10px;
  `,

  PostCategory: styled.div`
    color: #e24c4b;
    font-size: 16px;
    margin-bottom: 20px;
  `,

  PostTitle: styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  `,

  PostDate: styled.div`
    font-size: 16px;
    color: #616161e5;
    padding-left: 3px;
  `,

  PostBody: styled.div`
    padding: 10px 0 20px 10px;
  `,

  PostBottomBox: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  `,

  PostUserBox: styled.div`
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  `,

  PostUserProfileImg: styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  `,

  PostShareLikeBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `
};
