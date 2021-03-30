## Delivery Service Web With Redux Saga

#### 클린 코드 참고 사이트 [LINK](https://jae04099.tistory.com/entry/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%81%B4%EB%A6%B0-%EC%BD%94%EB%93%9C-%EA%B9%94%EB%81%94%ED%95%98%EA%B3%A0-%EB%8D%94-%EB%82%98%EC%9D%80-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%93%B8-%EC%88%98-%EC%9E%88%EB%8A%94-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%B0%A9%EB%B2%95%EB%93%A4)

### 개발 기록

#### [0319]

- [x] 메뉴 카테고리별 scroll spy 기능 구현
- [ ] scrollIntoView 작동

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
- [ ] jwt를 이용한 로그인 구현

#### [발생 이슈]

- [ ] jwt 이용한 로그인 구현 혹은 oAuth 사용
- [ ] 프론트단에서 할 수 있는 로그인 기능 구현 ( 이메일형식, 비밀번호 형식... )
- [ ] 장바구니에 담겨있을 때 다른 가게 장바구니 넣을 시 장바구니 초기화
- [ ] Radio box 데이터 검증 ( 필수 선택 카테고리 )
- [ ] redux saga로 데이터 가져올 때 이전에 있던 데이터 안보이게 처리
- [ ] CORS, PROXY 문제
- [ ] scroll spy 재구현
- [ ] infinity scorll 구현
- [ ] 리덕스 사가를 이용한 페이지 이동
- [ ] useSelect 해체문법으로 한번에 작성하기
- [ ] 초기값 설정 안되는 오류
- [ ] Redux Persist -> cart는 store에 안들어가지는 이유
- [ ] cart 초기화 했을 때 id 처리
- [x] 배열 초기화 : splice
- [x] 클릭 이벤트 동시 처리
- [x] x 눌렀을 때 Redux 제거, 결제 완료 시 에도 Redux 제거 기능 구현
- [x] 페이지 이동 시 스크롤 위치 맨 위로 - useLocation() Hooks 이용
- [x] 새로고침시 데이터 유지 : redux-persist 사용
- [x] Redux Loading 구현
- [x] useDispatch 사용 시 useCallback or useEffect 사용? : dispatch가 이벤트와 같이 함수로 사용된다면 useCallback 사용. 비동기 같이 렌더링 될때마다 실행된다면 useEffect 사용

- [ ] Token, JWT, OAuth -> 세션, 쿠키
- [x] 특정 컴포넌트에 nav 적용 제외시키기
- [ ] 객체 속성 접근자. 객체[key값] = value
