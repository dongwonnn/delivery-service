import * as authApi from '../lib/authorization';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';

const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';

export const check = () => ({
  type: CHECK,
});

function* checkSaga(action) {
  yield put(startLoading(CHECK));
  try {
    const response = yield call(authApi.check, action.payload);

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

// SAGA 통합
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

const initialStete = {
  user: null,
  checkError: null,
};

const user = (state = initialStete, action) => {
  switch (action.type) {
    case CHECK_SUCCESS:
      return {
        ...state,
      };
    case CHECK_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default user;
