// 액션 타입 정의
const ADD_CART = 'cart/ADD_CART';

// 액션 생성 함수
let id = 1;
export const addCart = (menuName, optionMenus, totalPrice) => ({
  type: ADD_CART,
  bill: {
    id: id++,
    menuName,
    optionMenus,
    totalPrice,
  },
});

// 초기값 설정
const initialStete = {
  bills: [],
};

// 리듀서 작성
function cart(state = initialStete, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        bills: state.bills.concat(action.bill),
      };
    default:
      return state;
  }
}

export default cart;
