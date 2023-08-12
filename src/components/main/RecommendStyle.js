import { styled } from 'styled-components';

export const St = {
  Test: styled.div``,

  RecommendContainer: styled.div`
    background-color: white;

    width: 1200px;
    height: 420px;
    margin: 100px 0px;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,

  RecommendTitle: styled.div`
    font-size: 26px;
    font-weight: 700;
    height: 10%;
    padding: 20px 0px;
  `,

  DrinkContainder: styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  DrinkImgeBox: styled.div`
    width: 40%;
    height: 0;

    position: relative;
    overflow: hidden;
    padding-bottom: 20%;
  `,

  DrinkImg: styled.img`
    width: 100%;
    height: 100%;

    position: absolute;
    object-fit: contain;
  `,

  DrinkBody: styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  `,

  DrinkName: styled.div`
    font-weight: 700;
    font-size: 20px;
    height: 24%;
  `,

  DrinkExplanation: styled.div`
    font-size: 18px;
    width: 80%;
    height: 40%;
  `,

  AginBtn: styled.div`
    background-color: #e24c4b;
    color: white;
    font-size: 16px;
    font-weight: 700;

    width: 90px;
    height: 36px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  `,

  MoodContainer: styled.div`
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  MoodSelect: styled.div`
    height: 240px;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    cursor: pointer;
  `,

  MoodImgeBox: styled.div`
    width: 200px;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
  `,

  MoodImg: styled.img``,

  MoodFlutterImg: styled.img`
    width: 158px;
    height: auto;
  `,

  MoodTitle: styled.div`
    font-size: 20px;
    height: 10%;
    margin-top: 30px;
  `
};
