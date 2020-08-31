/** useSelector & useDispatch 사용 */
// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import Todos from '../components/Todos';
// 액션 생성 함수
import { changeInput, insert, toggle, remove } from '../modules/todos';
// useActions 사용
import useActions from '../../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }));

  /*
  const dispatch = useDispatch();
  const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
  const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);
  */

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
}

// connect 함수 사용 시 해당 부모 컴포넌트 리렌더링될 때 해당 컴포넌트의 props가 바뀌지 않았다면 리렌더링 방지됨
// useSelector를 사용하여 리덕스 상태를 조회했을 때는 성능 최적화를 위해 React.memo를 컨테이너 컴포넌트에 사용
export default React.memo(TodosContainer);

/*
import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
// 액션 생성 함수
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = ({
  // 리덕스(todos) state 값
  input,
  todos,
  // 리덕스(todos) dispatch 함수
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

// connect(...) : 리덕스와 연동된 컴포넌트를 반환한다.
export default connect(
  // 비구조화 할당을 통해 todos를 분리하여 ({ todos } === state.todos)
  // state.todos.input 대신 todos.input을 사용
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  // dispatch 함수를 props로 전달
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
*/