import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import data, { dataSaga } from './data';
import cart from './cart';
import loading from './loading';
import auth from './auth';

const rootReducer = combineReducers({
  data,
  cart,
  loading,
  auth,
});

export function* rootSaga() {
  yield all([dataSaga()]);
}

export default rootReducer;
