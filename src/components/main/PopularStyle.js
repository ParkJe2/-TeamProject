import { styled } from 'styled-components';

export const St = {
  Test: styled.div``,

  PopularContainer: styled.div`
    width: 1200px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,

  PopularTitle: styled.div`
    font-size: 24px;
    font-weight: 700;
    height: 10%;
    margin-bottom: 50px;
  `,

  PopularRateContainer: styled.div`
    width: 100%;
    height: 100px;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  PopularRateText: styled.div`
    background-color: #e24c4b;
    color: white;
    font-size: 18px;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-right: 20px;

    width: 10%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  PopularPost: styled.div`
    background-color: white;

    width: 90%;
    height: 100%;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  `,

  PopularPostDate: styled.div`
    width: 10%;
    margin: 20px;
  `,

  PopularPostBody: styled.div`
    width: 52%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
  `,

  PopularPostCategory: styled.div`
    margin: 10px 10px 0px 20px;
    color: #e24c4b;

    height: 20%;
    font-size: 14px;
  `,

  PopularPostTitle: styled.div`
    font-weight: 700;
    margin: 10px;

    height: 40%;
    font-size: 18px;
  `,

  PopularPostLike: styled.div`
    width: 12%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,

  PopularPostLikeNum: styled.div`
    margin-top: 8px;
  `,

  ListProfileImgBox: styled.div`
    width: 56px;
    height: 56px;
    border-radius: 100%;
    border: 1px solid #e24c4b;
    overflow: hidden;

    margin: 0px 10px;
  `,

  ListProfileImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  ListNickname: styled.p`
    width: 10%;
    margin-right: 10px;

    font-size: 14px;
    margin-left: 10px;
  `
};
