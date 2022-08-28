# **원티드 프리온보딩 프론트엔드 챌린지 8월 - CRUD w React Query**

## **소개**

Todo List 관리 (CRUD)

## **기능**

회원가입, 로그인, 로그아웃, Todo CRUD

## **실행**

```
server => npm run start
client => npm run start
```

## **기술 스택**

```JSON
"dependencies": {
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.8.4",
    "@mui/material": "^5.10.0",
    "@mui/styled-engine-sc": "^5.10.0",
    "axios": "^0.27.2",
    "emotion-reset": "^3.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-query": "^3.39.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.0.8",
    "recoil": "^0.7.5",
    "styled-components": "^5.3.5"
  },
  "devDependencies": {
    "@types/node": "^16.11.48",
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "typescript": "^4.7.4"
  },
```

## **디렉토리 구조**

```
├─api : API 호출 함수
├─components : 컴포넌트
├─constants : 상수
├─hooks : 커스텀 훅
├─layout : 전체 레이아웃
├─lib : Axios 인스턴스
├─pages : 페이지 역할의 컴포넌트
├─recoil : Recoil 상태
├─router : React Router Dom의 Router
├─styles : 글로벌 스타일
├─types : 타입
└─utils : 기타
```

## **체크리스트**

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
- 로그아웃을 구현해주세요.
  - [x] 로컬 스토리지의 token을 삭제하여 로그아웃을 구현해주세요

## **Assignment 2 - Todo List**

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## **구현 사항**

<details>
<summary>구현 사항</summary>

### 회원가입

<img src="https://user-images.githubusercontent.com/63948484/184632594-f465abef-0c75-46ea-b249-423e247eae1f.gif" />

### 로그인

<img src="https://user-images.githubusercontent.com/63948484/184632603-3a6b57bc-e63a-4df9-8e91-1db51114a846.gif" />

### 추가

<img src="https://user-images.githubusercontent.com/63948484/184632606-cd628b4f-683b-4612-a263-a6e9549c026b.gif" />

### 상세 정보

<img src="https://user-images.githubusercontent.com/63948484/184632608-f5718deb-81a2-4908-8b04-ad666e0bbc7a.gif" />

### 수정

<img src="https://user-images.githubusercontent.com/63948484/184632615-4d7b315e-eb8c-49ee-848a-da11dbedcd58.gif" />

### 삭제

<img src="https://user-images.githubusercontent.com/63948484/184632617-15ccc3a6-2fbe-4dae-872c-a59cadb97481.gif" />

### 로그아웃

<img src="https://user-images.githubusercontent.com/63948484/184632618-9c6ae297-4f1a-4c2c-b4a5-7da48c5834c6.gif" />

<img />

</details>
