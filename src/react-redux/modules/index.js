import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀서 생성 : createReducer 함수를 사용하여 스토어를 만들 때 리듀서를 하나만 사용해야 한다.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;