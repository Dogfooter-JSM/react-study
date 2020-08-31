import React, { useReducer } from 'react'

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1};
    default:
      // 아무것도 해당되지 않는 때 기존 상태 반환
      return state;
  }
}

const Counter2 = () => {
  // reducer 함수의 첫번째 파라미터인 state({}) 값과 dispatch 함수로 넘기는 action({}) 파라미터 값을 이용하여
  // 새로운 state 값을 생성하여 리턴하므로써 state 값({})을 갱신한다.
  // dispatch(action-param: {}) 호출 --> reducer(state, action-param) 호출 : 리턴 값으로 state 값 재설정
  const [state, dispatch] = useReducer(reducer, { value: 0 });  // state = { value: 0 }

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* { type: 'INCREMENT' } : reducer 함수의 action parameter 값으로 사용된다. */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter2;