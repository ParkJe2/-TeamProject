import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const St = {
  Test: styled.div``,

  HeaderContainer: styled.header`
    height: 100px;
    background-color: white;
    border-bottom: solid 1px #969696;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  HeaderLogoImg: styled.img`
    width: auto;
    height: 80px;

    cursor: pointer;
  `,

  CategoryWrapper: styled.div`
    width: 1000px;

    justify-content: center;
    display: grid;
    grid-template-columns: repeat(4, auto);
  `,

  CategoryLink: styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 18px;

    margin: 0px 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &:hover {
      color: #e24c4b;
      font-weight: 900;
    }
  `
};
