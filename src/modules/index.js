import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import data, { dataSaga } from './data';
import loading from './loading';

const rootReducer = combineReducers({
  data,
  loading,
});

export function* rootSaga() {
  yield all([dataSaga()]);
}

export default rootReducer;
