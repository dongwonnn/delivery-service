// 액션 타입 정의
const ADD_CART = 'cart/ADD_CART';
const RESET_CART = 'cart/RESET_CART';
const REMOVE_CART = 'cart/REMOVE_CART';

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

export const resetCart = () => ({
  type: RESET_CART,
});

export const removeCart = (id) => ({
  type: REMOVE_CART,
  id,
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
    case RESET_CART:
      return {
        ...state,
        bills: state.bills.splice(0, state.bills.length),
      };
    case REMOVE_CART:
      return {
        ...state,
        bills: state.bills.filter((bill) => bill.id !== action.id),
      };
    default:
      return state;
  }
}

export default cart;
