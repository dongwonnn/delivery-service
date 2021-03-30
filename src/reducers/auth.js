const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = ({ form, key, value }) => ({
  type: CHANGE_FIELD,
  form, // lgoin인지, register 인지
  key, // username, password,
  value, // 실제 바꾸려는 값
});

export const initializeForm = () => ({
  type: INITIALIZE_FORM,
});

const initialStete = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = (state = initialStete, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.key]: action.value,
        },
      };
    case INITIALIZE_FORM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default auth;
