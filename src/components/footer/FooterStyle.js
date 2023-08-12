import { styled } from 'styled-components';

export const St = {
  FooterContain: styled.footer`
    background-color: #d9d9d9;
    color: #3d3d3d;
    font-size: 13px;

    height: 80px;
    margin-top: 100px;

    display: flex;
    justify-content: center;
    flex-direction: column;
  `,

  MemberGitHub: styled.div`
    margin: 0px 0px 5px 60px;
  `,

  GitHub: styled.div`
    height: 20px;
  `,

  MemberList: styled.div`
    display: flex;
    align-items: center;
  `,

  MemberLink: styled.a`
    color: #3d3d3d;
    text-decoration: none;

    margin: 2px 10px 8px 10px;
  `,

  Copyright: styled.div`
    margin: 0px 60px;

    display: flex;
  `,

  TeamName: styled.div`
    font-weight: 700;
  `
};
