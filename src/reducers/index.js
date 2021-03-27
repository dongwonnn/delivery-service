import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import data, { dataSaga } from './data';
import cart from './cart';
import loading from './loading';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const rootReducer = combineReducers({
  data,
  cart,
  loading,
});

export function* rootSaga() {
  yield all([dataSaga()]);
}

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
