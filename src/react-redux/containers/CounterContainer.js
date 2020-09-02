/** useSelector & useDispatch 사용 */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
// 액션 생성 함수
import { increase, decrease } from '../modules/counter';

// 리덕스와 연동하여 사용할 컨테이너 정의
const CounterContainer = () => {
  
  // connect 함수 대신 useSelector 함수를 사용하여 상태 값 조회
  // 상태 선택 함수는 mapStateToProps와 같은 형태를 갖는다.
  const number = useSelector(state => state.counter.number);
  
  // useDispatch 함수 : 스토어 내장함수인 dispatch를 사용할 수 있다.
  // dispatch(increase(), decrease())
  const dispatch = useDispatch();

  // useDispatch를 사용할 때는 useCallback과 함께 사용하여 함수 재생성을 막는다.
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

/** useStore Hooks를 사용하여 내부에서 리덕스 스토어 객체를 직접 사용하는 방법 */
/*
const store = useStore();
store.dispatch({ type: 'SAMPLE_ACTION'});
store.getState();
*/

export default CounterContainer;



/*
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
// 액션 생성 함수
import { increase, decrease } from '../modules/counter';
// import { bindActionCreators } from 'redux';

// 리덕스와 연동하여 사용할 컨테이너 정의
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// mapDispatchToProps에 해당하는 파라미터를 액션 생성 함수로 이루어진 객체 형태로 넣는다.
// connect(...) : 리덕스와 연동된 컴포넌트를 반환한다.
export default connect(
  // 리덕스(counter) state 값
  state => ({
    number: state.counter.number,
  }),
  // 리덕스(counter) dispatch 함수
  { 
    increase, 
    decrease
  },
)(CounterContainer);
*/

/*
// bindActionCreators 함수 사용
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => 
    bindActionCreators(
      { increase, decrease },
      dispatch,
    ),
)(CounterContainer);
*/
/*
// 리덕스 스토어 안의 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
// mapStateToProps에서 반환하는 객체 내부의 함수들은 컴포넌트의 props로 전달된다.
const mapDispatchToProps = dispatch => ({
  // 임시 함수
  increase: () => {
    // increase() 액션 생성 --> 리듀서(counter) 함수 실행됨 (type: INCREASE) --> number 증가
    dispatch(increase());
  },
  decrease: () => {
    // decrease() 액션 생성 --> 리듀서(counter) 함수 실행됨 (type: DECREASE) --> number 감소
    dispatch(decrease());
  },
});

// react-redux에서 제공하는 connect(mapStateToProps, mapDispatchToProps) 함수가 반환하는 함수에
// 컴포넌트를 파라미터로 넘겨 주면 리덕스와 연동된 컴포넌트가 생성된다.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
*/

/*
// 익명 함수 형태로 선언
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => ({
    // 임시 함수
    // increase: () => dispatch(increase()) === increase: () => { return dispatch(increase()) }
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
    },
  }),
)(CounterContainer);
*/