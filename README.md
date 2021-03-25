## Delivery Service Web With Redux Saga

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

- [ ] x버튼 -> bill 제거 reducer, 결제 완료 시 bills 제거 reducer 구현
- [x] 새로고침시 store 데이터 유지 : redux-persist 사용
- [x] Redux Saga Container 대신 Hooks 대체 (useSelector, useDispatch 이용)
- [x] useSelector 사용 시 props가 바뀌지 않았다면 리렌더링을 방지하는 React.memo 설정

#### [발생 이슈]

- [ ] Radio box 데이터 검증 ( 필수 선택 카테고리 )
- [ ] x 눌렀을 때 Redux 제거, 결제 완료 시 에도 Redux 제거 기능 구현
- [ ] 장바구니에 담겨있을 때 다른 가게 장바구니 넣을 시 장바구니 초기화
- [ ] 페이지 이동 시 스크롤 위치 맨 위로
- [ ] redux saga로 데이터 가져올 때 이전에 있던 데이터 안보이게 처리
- [ ] scroll spy 재구현
- [ ] infinity scorll 구현
- [x] 새로고침시 데이터 유지 : redux-persist 사용
- [ ] Redux Loading 구현
- [x] useDispatch 사용 시 useCallback or useEffect 사용? : dispatch가 이벤트와 같이 함수로 사용된다면 useCallback 사용. 비동기 같이 렌더링 될때마다 실행된다면 useEffect 사용
- [ ] CORS, PROXY 문제
