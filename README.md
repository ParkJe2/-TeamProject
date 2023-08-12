# React 심화 주차 팀 프로젝트 "주(酒)의사항"

## 🖥️ 프로젝트 소개

#### - 사회 초년생을 위한 술 커뮤니티

- 술자리 팁, 건배사 추천, 술 게임, 숙취해소법 등 건강한 음주 문화를 위한 커뮤니티

## 📕 [S.A(Starting Assignments)](https://www.notion.so/5e115ec1634b4af9a51cb951e7a1cd4f)

## 🎬 구현 사이트

### [주(酒)의사항](https://drink-cautions.vercel.app/)

## ⏰ 개발 기간

- 23.08.07(월) ~ 23.08.11(금)

## 👤 멤버 구성 및 역할 분담

| 이름   |      | 기능 구현                                                        |
| ------ | ---- | ---------------------------------------------------------------- |
| 박제이 | 팀장 | 닉네임 변경, 프로필 사진 변경, 내가 쓴 글 & 좋아요한 글 불러오기 |
| 이지영 | 팀원 | 헤더(로그인 정보), 회원가입, 로그인, 로그아웃                    |
| 이혜영 | 팀원 | 헤더&푸터, 게시글 인기순 정렬, 카테고리, 오늘의 추천 술          |
| 장혜진 | 팀원 | 게시글 수정, 게시글 삭제, 게시글 좋아요, 게시글 공유             |
| 최다연 | 팀원 | 게시글 작성, 댓글 작성, 댓글 삭제                                |

| 이름   |      | UI 구현                     |
| ------ | ---- | --------------------------- |
| 박제이 | 팀장 | 마이페이지 & 페이지네이션   |
| 이지영 | 팀원 | 로그인 & 헤더(로그인 정보)  |
| 이혜영 | 팀원 | 헤더&푸터, 메인             |
| 장혜진 | 팀원 | 게시글 상세 페이지 & 에디터 |
| 최다연 | 팀원 | 카테고리 페이지             |

## 🛠️ 화면 구성

- Login Page
  - 로그인
  - 회원가입
- Main Page
  - 헤더
  - 오늘의 나는? (선택한 기분에 따라 술 랜덤 추천)
  - 게시글 인기순 정렬
  - 푸터
- My Page
  - 회원 정보 수정 (닉네임 / 프로필 사진)
  - 내가 쓴 게시글 목록 (페이지네이션)
  - 좋아요한 게시글 목록 (페이지네이션)
- Category Page
  - 술자리 팁
  - 술 건배사
  - 술 게임
  - 숙취 해소 방법
- Write Page
  - 글 작성 (에디터)
- Detail Page
  - 게시글 수정 / 삭제
  - 댓글 작성 / 삭제

## ❗ Commit Convention

`Commit message 작성 예시) “Feat/first commit”`

- `Feat`: 새로운 기능, 특징 추가
- `Fix`: 버그 수정
- `Design`: UI Design 변경
- `Style`: 코드 포맷 변경, 세미 콜론 누락 (코드 수정X)
- `Refactor`: 리팩토링
- `Comment`: 필요한 주석 추가 및 변경
- `Docs`: 문서 수정
- `Test`: 테스트 코드 (프로덕션 코드 수정X)
- `Chore`: 빌드 업무 & 패키지 매니저 수정, 패키지 관리자 구성 업데이트 등 (프로덕션 코드 수정X)
- `Rename`: 폴더 & 파일 이름 수정 및 옮기는 작업
- `Remove`: 파일 삭제하는 작업만 수행한 경우

## ⚙️ 개발 환경 / 기술스택

- React
  - React query
- JavaScript
- HTML
- Styled-components
- Supabase
  - Auth
  - Storage
  - Tables
