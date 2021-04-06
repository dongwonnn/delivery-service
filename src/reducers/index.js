import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cart from './cart';
import loading from './loading';
import data, { dataSaga } from './data';
import auth, { authSaga } from './auth';

const rootReducer = combineReducers({
  data,
  cart,
  loading,
  auth,
});

export function* rootSaga() {
  yield all([dataSaga(), authSaga()]);
}

export default rootReducer;
