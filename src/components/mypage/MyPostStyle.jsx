import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import ReactPaginate from 'react-paginate';

export const St = {
  MyPostContainer: styled.div`
    margin: auto;
    padding: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
  `,
  PostList: styled.div`
    gap: 20px;
    display: flex;
    cursor: pointer;
  `,
  ListBtn: styled.button`
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    &:focus {
      font-weight: bold;
    }
  `,
  ListBox: styled.div`
    width: 800px;
    height: 520px;
    padding: 10px;
    display: flex;
    margin-top: 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  `,
  PostLink: styled(Link)`
    color: #000;
    text-decoration-line: none;
  `,
  Lists: styled.div`
    width: 630px;
    height: 60px;
    display: flex;
    padding: 5px;
    cursor: pointer;
    margin: 20px auto;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    word-break: break-all;
    background-color: #f3f3f3;
  `,
  ListDate: styled.p`
    font-size: 14px;
    margin-left: 10px;
  `,

  ListTitleBox: styled.div`
    gap: 5px;
    display: flex;
    flex-direction: column;
  `,
  ListCategory: styled.p`
    font-size: 14px;
    text-align: left;
    margin-left: 35px;
  `,
  ListTitle: styled.p`
    font-size: 16px;
    margin-left: 35px;
    font-weight: bold;
  `,
  ListLikeBox: styled.div`
    gap: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  ListWriterWrap: styled.div`
    gap: 10px;
    display: flex;
    margin-left: auto;
    flex-direction: row;
    align-items: center;
  `,
  ListProfileImgBox: styled.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 100%;
  `,
  ListProfileImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  ListNickname: styled.p`
    font-size: 14px;
    margin-right: 10px;
  `,
  Paginate: styled(ReactPaginate).attrs({
    activeClassName: 'active'
  })`
    display: flex;
    padding: 0 5rem;
    margin-top: 1.3rem;
    list-style-type: none;
    justify-content: center;
    li a {
      padding: 0.1rem 1rem;
      cursor: pointer;
    }
    li.previous a {
      font-weight: bold;
    }
    li.active a {
      font-weight: bold;
      min-width: 30px;
    }
    li.disable,
    li.disabled a {
      cursor: default;
    }
  `
};
