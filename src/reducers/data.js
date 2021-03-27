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

const GET_DETAILS = 'data/GET_DETAILS';
const GET_DETAILS_SUCCESS = 'data/GET_DETAILS_SUCCESS';
const GET_DETAILS_FAILURE = 'data/GET_DETAILS_FAILURE';

const GET_MENUS = 'data/GET_MENUS';
const GET_MENUS_SUCCESS = 'data/GET_MENUS_SUCCESS';
const GET_MENUS_FAILURE = 'data/GET_MENUS_FAILURE';

// 액션 생성 함수
export const getCat = () => ({ type: GET_CAT });
export const getStores = () => ({ type: GET_STORES });
export const getDetails = (storeId) => ({ type: GET_DETAILS, storeId });
export const getMenus = (menuId) => ({
  type: GET_MENUS,
  menuId,
});

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
    const stores = yield call(api.getStores);

    yield put({
      type: GET_STORES_SUCCESS,
      payload: stores.data,
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

function* getDetailsSaga(action) {
  yield put(startLoading(GET_DETAILS));
  try {
    const details = yield call(api.getDetails, action.storeId);

    yield put({
      type: GET_DETAILS_SUCCESS,
      payload: details.data.data,
    });
  } catch (e) {
    yield put({
      type: GET_DETAILS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(GET_DETAILS));
}
function* getMenusSaga(action) {
  yield put(startLoading(GET_MENUS));
  try {
    const menus = yield call(api.getMenus, action.menuId);

    yield put({
      type: GET_MENUS_SUCCESS,
      payload: menus.data.data,
    });
  } catch (e) {
    yield put({
      type: GET_MENUS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoding(GET_MENUS));
}

// SAGA 통합
export function* dataSaga() {
  yield takeLatest(GET_CAT, getCatSaga);
  yield takeLatest(GET_STORES, getStoresSaga);
  yield takeLatest(GET_DETAILS, getDetailsSaga);
  yield takeLatest(GET_MENUS, getMenusSaga);
}

// 초기값 설정
const initialStete = {
  cat: null,
  stores: null,
  details: null,
  menus: null,
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
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };
    case GET_MENUS_SUCCESS:
      return {
        ...state,
        menus: action.payload,
      };
    case GET_CAT_FAILURE:
    case GET_STORES_FAILURE:
    case GET_DETAILS_FAILURE:
    case GET_MENUS_FAILURE:
    default:
      return state;
  }
}

export default data;
