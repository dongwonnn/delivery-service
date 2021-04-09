import * as authApi from '../lib/authorization';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';
import client from '../lib/client';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

const CHECK = 'CHECK';
const CHECK_SUCCESS = 'auth/CHECK_SUCCESS';
const CHECK_FAILURE = 'auth/CHECK_FAILURE';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

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

export const check = (token) => ({
  type: CHECK,
});

export const logout = (token) => ({
  type: LOGOUT,
  token,
});

// saga 생성
function* loginSaga(action) {
  yield put(startLoading(LOGIN));
  try {
    const { email, password } = action;
    const response = yield call(authApi.login, { email, password });
    const ACCESS_TOKEN = response.headers.authorization;

    localStorage.setItem('access_token', ACCESS_TOKEN);

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

function* checkSaga() {
  yield put(startLoading(CHECK));
  try {
    client.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('access_token')}`;

    const response = yield call(authApi.check);

    yield put({
      type: CHECK_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: CHECK_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(CHECK));
}

function* logoutSaga() {
  yield put(startLoading(LOGOUT));

  try {
    client.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('access_token')}`;

    yield call(authApi.logout);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');

    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(LOGOUT));
}

// SAGA 통합
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGOUT, logoutSaga);
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
  regiCheck: null,
  regiError: null,
  auth: null,
  authError: null,
  user: null,
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
    case REGISTER_SUCCESS:
      return {
        ...state,
        regiError: null,
        regiCheck: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        regiError: action.payload,
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
    case CHECK_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case CHECK_FAILURE:
      return {
        ...state,
        checkError: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        auth: null,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
