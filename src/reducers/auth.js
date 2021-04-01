import * as authApi from '../lib/authorization';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const changeField = ({ form, key, value }) => ({
  type: CHANGE_FIELD,
  form, // lgoin인지, register 인지
  key, // username, password,
  value, // 실제 바꾸려는 값
});

export const initializeForm = (form) => ({
  type: INITIALIZE_FORM,
  form,
});

export const login = ({ email, password }) => ({
  type: LOGIN,
  email,
  password,
});

export const register = ({ name, email, password }) => ({
  type: REGISTER,
  name,
  email,
  password,
});

// saga 생성
function* loginSaga(action) {
  console.log(action);
  yield put(startLoading(LOGIN));
  try {
    const { email, password } = action;
    const response = yield call(authApi.login, { email, password });
    console.log(response);

    yield put({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(LOGIN));
}

function* registerSaga(action) {
  yield put(startLoading(REGISTER));
  try {
    const { name, email, password } = action;
    const response = yield call(authApi.register, {
      name,
      email,
      password,
    });

    yield put({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: REGISTER_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(REGISTER));
}

// SAGA 통합
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}

const initialStete = {
  register: {
    name: '',
    password: '',
    passwordConfirm: '',
    email: '',
    phoneNum: '',
  },
  login: {
    email: '',
    password: '',
  },
  auth: null,
  authError: null,
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
        [action.form]: initialStete[action.form],
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        auth: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
