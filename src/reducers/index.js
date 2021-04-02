import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cart from './cart';
import loading from './loading';
import data, { dataSaga } from './data';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  data,
  cart,
  loading,
  auth,
  user,
});

export function* rootSaga() {
  yield all([dataSaga(), authSaga(), userSaga()]);
}

export default rootReducer;
