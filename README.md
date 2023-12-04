# Fanpage Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 소개

- 토트넘의 회원제 팬페이지로, 회원가입 및 로그인이 된 user들은 선수들에게 팬레터를 작성할 수 있습니다.
- 프로필 변경(닉네임 및 프로필 이미지)이 가능합니다.
- 필터를 통해 선택된 선수들의 팬레터만 모아볼 수 있습니다.

### 사이트 배포 주소
[프로젝트로 이동하기](https://nbc-auth-fan-page.vercel.app/)
<br>
[json 서버 이동하기](https://standing-likeable-oviraptor.glitch.me/)



### 사이트 미리보기

![image](https://github.com/surely07/nbc-auth-fanPage/assets/147504785/95daa9f9-75e7-44a7-8de3-d1eeb1a8fcad)
![image](https://github.com/surely07/nbc-auth-fanPage/assets/147504785/db31f8f8-3b45-45dc-8c95-13ac20901752)

## 기술 스택 및 사용 라이브러리

- react
- redux
- react-router-dom
- styled-components
- uuid
- axios
- redux toolkit
- redux thunk
- json-server

## 프로젝트 설치

### clone repository

```
git clone https://github.com/surely07/nbc-auth-fanPage.git
```

### Install npm dependencies

```
yarn
yarn install
```

### Start dev-server

```
yarn start
```

## 요구사항

### 필수 구현 사항

##### - 홈 화면 UI 수정 (Create, Read)

- ✔️ 회원가입 시 작성한 닉네임 값으로 팬레터 UI 수정

##### 상세 화면 UI 구현 (Read, Update, Delete)

- ❌ 본인이 작성한 게시글에만 수정, 삭제 권한 부여

##### 로그인/회원가입 UI 구현

- ✔️ 로그인 해야만 Home, Detail, Profile 페이지 접속 가능
- ✔️ 기본 페이지는 로그인 페이지
- ❌ 회원가입 기능 구현
- ✔️ 로그인, 회원가입 창 토글링

#### 프로필관리 UI 구현

- ✔️ Profile 페이지 UI 구현
- ✔️ 프로필 이미지, 닉네임 수정 기능 구현, 수정 후 letter list에 자동 반영

##### 배포하기

- ✔️ Vercel 이라는 호스팅플랫폼을 이용해 배포
- ✔️ 배포에 적용될 브랜치는 redux-thunk 브랜치로 적용
