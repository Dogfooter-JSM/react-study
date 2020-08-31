/** useSelector & useDispatch 사용 */
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
// 액션 생성 함수
import { increaseAsync, decreaseAsync } from '../modules/counter';

// 리덕스와 연동하여 사용할 컨테이너 정의
const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync} />
  );
};

// 익명 함수 형태로 선언
export default connect(
  state => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(CounterContainer);