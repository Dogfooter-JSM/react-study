import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';

// 루트 리듀서 생성 : createStore 함수를 사용하여 스토어를 만들 때 리듀서를 하나만 사용해야 한다.
const rootReducer = combineReducers({
  counter,
  sample
});

export default rootReducer;