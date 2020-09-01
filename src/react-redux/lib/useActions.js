import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

// actions : 액션 생성 함수로 이루어진 배열
// deps: 이 배열 안에 들어 있는 원소가 바뀌면 액션을 디스패치하는 함수를 새로 생성
export default function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map((a) => bindActionCreators(a, dispatch));
    }
    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch]);
}
