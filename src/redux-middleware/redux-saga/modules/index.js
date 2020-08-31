import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';

// 루트 리듀서 생성 : createStore 함수를 사용하여 스토어를 만들 때 리듀서를 하나만 사용해야 한다.
const rootReducer = combineReducers({
  counter,
  sample,
  loading
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 한다.
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;