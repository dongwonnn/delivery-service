# 배달 서비스 클론코딩

이전에 진행했던 프로젝트에 **백엔드, Redux, Redux Saga**를 추가한 프로젝트 입니다.

이전 프로젝트 : [https://github.com/dongwonnn/delivery-service-web](https://github.com/dongwonnn/delivery-service-web)

url : [https://dongwonnn.github.io/delivery-service](https://dongwonnn.github.io/delivery-service)

Test ID/PW : test5@naver.com / 12345678

## 👨‍💻 기술 스택

<h3 align="center">  
  FrontEnd
</h3>
<p align="center">  
  <img src="https://img.shields.io/badge/HTML-white?logo=html5"/>
  <img src= "https://img.shields.io/badge/CSS-blue?logo=css3"/>
  <img src= "https://img.shields.io/badge/SCSS-pink?logo=sass"/>
  <img src= "https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript"/>
  <img src= "https://img.shields.io/badge/React-blue?logo=react"/>
  <img src= "https://img.shields.io/badge/Redux-593D88?logo=Redux&logoColor=white"/>
  <img src= "https://img.shields.io/badge/ReduxSaga-white?logo=Redux-saga&logoColor=green"/>
</p>

<h3 align="center">  
  BackEnd
</h3>
<p align="center">  
  <img src="https://img.shields.io/badge/Laravel
-FF2D20?logo=Laravel&logoColor=white
"/>
  <img src= "https://img.shields.io/badge/PHP-777BB4?logo=PHP&logoColor=white"/>
  <img src= "https://img.shields.io/badge/MySQL-4479A1?logo=MySQL&logoColor=white"/>
</p>

<h3 align="center">  
  Cooperation
</h3>
<p align="center">
  <img src="https://img.shields.io/badge/GitHub-100000?logo=github" />
  <img src= "https://img.shields.io/badge/Git-FF4500?logo=git&logoColor=white"/>
  <img src= "https://img.shields.io/badge/Slack-4A154B?logo=slack"/>
  <img src= "https://img.shields.io/badge/Swagger-85EA2D?logo=Swagger&logoColor=white""/>

</p>

## ⚙️ 추가 기능

- **반응형 웹** 구현
- **JWT 토큰** 로그인 인증
- **Redux, Redux Saga** 적용
- **UI 기능** ( Modal, Scroll Spy, Infinity Scroll, Drag Scroll )

## 📚 프로젝트 정리 글

- [🔗 Link](https://github.com/dongwonnn/TIL/blob/main/21.03/03.05.md) Github Actions / Pages를 이용한 CI/CD 설정
- [🔗 Link](https://github.com/dongwonnn/TIL/blob/main/21.04/04.02.md) JWT 인증 구현, CORS 이슈 해결
- [🔗 Link](https://github.com/dongwonnn/TIL/blob/main/21.03/03.17.md) Redux Saga를 이용한 api 요청 상태 관리
- [🔗 Link](https://github.com/dongwonnn/TIL/blob/main/21.03/03.25.md) Redux-persist 사용하여 새로고침 해도 Store 유지
- [🔗 Link](https://github.com/dongwonnn/TIL/blob/main/21.03/03.30.md) IntersectionObserver 이용해 Infinity Scroll 구현
- [🔗 Link](https://github.com/dongwonnn/TIL/blob/main/21.04/04.10.md) Modal, dim 컴포넌트 구현
- [🔗 Link](https://github.com/dongwonnn/TIL/blob/main/21.04/04.15.md) 페이지 이동 시 스크롤 높이 최상단으로 고정하기
- [🔗 Link](https://github.com/dongwonnn/TIL/blob/main/21.05/05.09.md) 특정 컴포넌트 특정 페이지에서 제거하기

### 개발 기록

<details>

#### [0319]

- [x] 메뉴 카테고리별 scroll spy 기능 구현

#### [0322]

- [x] 메뉴 옵션 추가 모달

#### [0323]

- [x] 모달외에 black 배경 구현
- [x] 장바구니 기능 Reducer 구현

#### [0324]

- [x] Github pages 설정
- [x] 결제 페이지 구현
- [x] 서버와 ajax 데이터 통신 폼 구현

#### [0325]

- [x] 새로고침시 store 데이터 유지 : redux-persist 사용
- [x] Redux Saga Container 대신 Hooks 대체 (useSelector, useDispatch 이용)
- [x] useSelector 사용 시 props가 바뀌지 않았다면 리렌더링을 방지하는 React.memo 설정
- [x] 페이지 이동 시 스크롤 항상 위 고정

#### [0329]

- [x] x버튼 -> bill 제거 reducer, 결제 완료 시 bills 제거 reducer 구현
- [x] splice를 이용한 배열 초기화

#### [0330]

- [x] 반응형 css 구현
- [x] Redux Saga 로그인 auth template 구현

#### [0331]

- [x] Infinity Scroll 구현(1)
      Redux Saga와 결합 방법, 데이터 쪼개서 구현
- [x] Intersection Observer API 사용법

#### [0401]

- [x] Reudx Saga 이용한 Network 통신. -> 로그인, 회원가입 기능 (post)
- [x] 로그인, 회원가입 페이지 접속 시 state 초기화
- [x] 로그인 여부를 알 수 있는 check, 헤더 설정

### [0402]

- [x] proxy 설정, CORS 이슈 해결
- [x] 로그인 여부를 알 수 있는 check, 헤더 설정
- [x] 새로고침시 로그인 유지

#### [발생 이슈]

- [x] auth post 실패 시 발생하는 에러 메세지 콘솔 숨기기
- [x] login, register 성공했다면, initialForm을 통해 input 값들 초기화 시키기
- [x] scroll spy 재구현
- [x] infinity scorll 구현
- [x] jwt 이용한 로그인 구현
- [x] redux saga로 데이터 가져올 때 이전에 있던 데이터 안보이게 처리
- [x] CORS, PROXY 문제
- [x] 리덕스 사가를 이용한 페이지 이동
- [x] useSelect 해체문법으로 한번에 작성하기
- [x] 초기값 설정 안되는 오류
- [x] Redux Persist -> cart는 store에 안들어가지는 이유
- [x] cart 초기화 했을 때 id 처리
- [x] Token, JWT, OAuth -> 세션, 쿠키
- [x] 배열 초기화 : splice
- [x] 클릭 이벤트 동시 처리
- [x] x 눌렀을 때 Redux 제거, 결제 완료 시 에도 Redux 제거 기능 구현
- [x] 페이지 이동 시 스크롤 위치 맨 위로 - useLocation() Hooks 이용
- [x] 새로고침시 데이터 유지 : redux-persist 사용
- [x] Redux Loading 구현
- [x] useDispatch 사용 시 useCallback or useEffect 사용? : dispatch가 이벤트와 같이 함수로 사용된다면 useCallback 사용. 비동기 같이 렌더링 될때마다 실행된다면 useEffect 사용

- [x] 특정 컴포넌트에 nav 적용 제외시키기
- [x] 객체 속성 접근자. 객체[key값] = value
- [x] input value undefined 처리 : || ''

</details>
