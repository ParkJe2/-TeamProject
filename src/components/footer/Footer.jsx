import React from 'react';
import { St } from './FooterStyle';

const Footer = () => {
  return (
    <St.FooterContain>
      <St.MemberGitHub>
        <St.GitHub>GitHub</St.GitHub>
        <St.MemberList>
          <St.MemberLink href="https://github.com/ParkJe2">박제이</St.MemberLink>|
          <St.MemberLink href="https://github.com/lizzieFEstudy">이지영</St.MemberLink>|
          <St.MemberLink href="https://github.com/kkotburi">이혜영</St.MemberLink>|
          <St.MemberLink href="https://github.com/huizhenz">장혜진</St.MemberLink>|
          <St.MemberLink href="https://github.com/cheddaryeon">최다연</St.MemberLink>
        </St.MemberList>
      </St.MemberGitHub>
      <St.Copyright>
        Copyright @<St.TeamName>&nbsp;Team 精神改造</St.TeamName>
      </St.Copyright>
    </St.FooterContain>
  );
};

export default Footer;
