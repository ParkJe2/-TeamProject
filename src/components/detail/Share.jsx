import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { St } from './ShareLikesStyle';

const Share = () => {
  const currentUrl = window.location.href;

  const items = [
    {
      key: '1',
      label: (
        <CopyToClipboard text={currentUrl} onCopy={() => alert('주소가 복사되었습니다.')}>
          <St.LinkIconImg src={'/linkIcon.png'} alt="링크 아이콘" />
        </CopyToClipboard>
      )
    },
    {
      key: '2',
      label: (
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
      )
    },
    {
      key: '3',
      label: (
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={36} round={true} />
        </FacebookShareButton>
      )
    }
  ];

  return (
    <St.ShareDropdown
      menu={{
        items
      }}
      placement="bottomLeft"
      arrow
    >
      <St.ShareIcon />
    </St.ShareDropdown>
  );
};

export default Share;
