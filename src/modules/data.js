import * as api from '../lib/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { finishLoding, startLoading } from './loading';

// 액션 타입 정의
const GET_CAT = 'data/GET_CAT';
const GET_CAT_SUCCESS = 'data/GET_CAT_SUCCESS';
const GET_CAT_FAILURE = 'data/GET_CAT_FAILURE';

const GET_STORES = 'data/GET_STORES';
const GET_STORES_SUCCESS = 'data/GET_STORES_SUCCESS';
const GET_STORES_FAILURE = 'data/GET_STORES_FAILURE';

// 액션 생성 함수
export const getCat = () => ({ type: GET_CAT });
export const getStores = () => ({ type: GET_STORES });

// SAGA 작성
function* getCatSaga() {
  yield put(startLoading(GET_CAT));
  try {
    const cat = yield call(api.getCategories);

    yield put({
      type: GET_CAT_SUCCESS,
      payload: cat.data,
    });
  } catch (e) {
    yield put({
      type: GET_CAT_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(GET_CAT));
}

function* getStoresSaga() {
  yield put(startLoading(GET_STORES));
  try {
    const cat = yield call(api.getStores);

    yield put({
      type: GET_STORES_SUCCESS,
      payload: cat.data,
    });
  } catch (e) {
    yield put({
      type: GET_STORES_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(GET_STORES));
}

// SAGA 통합
export function* dataSaga() {
  yield takeLatest(GET_CAT, getCatSaga);
  yield takeLatest(GET_STORES, getStoresSaga);
}

// 초기값 설정
const initialStete = {
  cat: null,
  stores: null,
};

// 리듀서 작성
function data(state = initialStete, action) {
  switch (action.type) {
    case GET_CAT_SUCCESS:
      return {
        ...state,
        cat: action.payload,
      };
    case GET_STORES_SUCCESS:
      return {
        ...state,
        stores: action.payload,
      };
    default:
      return state;
  }
}

export default data;
