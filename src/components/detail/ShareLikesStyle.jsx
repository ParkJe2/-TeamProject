import { Dropdown } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { styled } from 'styled-components';

export const St = {
  ShareDropdown: styled(Dropdown)`
    /* display: inline-flex;
    flex-direction: row; */
  `,

  ShareIcon: styled(ShareAltOutlined)`
    font-size: 28px;
    cursor: pointer;
  `,

  LinkIconImg: styled.img`
    width: 35px;
    border-radius: 50%;
  `,

  LikesButtonBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 25px;
  `,

  LikesCount: styled.div`
    margin-top: 7px;
  `
};
