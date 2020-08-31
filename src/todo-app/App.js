import React, { useState, useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':  // 새로 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': // 토글 (선택 or 해제)
      // { type: 'TOGGLE', id: 1 }
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo);
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  // 원래 두 번째 초기 상태를 넣어 주어야 함
  // 아래와 같이 하면 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos 함수가 호출됨
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(2501);

  // 상태 업데이트를 어떻게 할 지 정의해 주는 업데이트 함수를 넣을 수도 있다. --> 함수형 업데이트
  // 두 번째 파라미터로 넣는 배열에 값을 넣을 필요가 없다.
  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // 세터를 사용할 때 새로운 상태를 파라미터로 넣는 대신, 
      // setTodos(todos => todos.concat(todo));
      // useReducer()를 사용할 수 있다. --> 상태 업데이트 함수를 컴포넌트 바깥에 둘 수 있다.
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1; // nextId 1 씩 더하기
    }, []
  );

  // 함수형 업데이트 (todos 리스트에서 항목 제거)
  const onRemove = useCallback(id => {
      // setTodos(todos => todos.filter(todo => todo.id !== id));
      dispatch({ type: 'REMOVE', id });
    }, []
  );

  // 함수형 업데이트 (todos 리스트에서 항목 선택)
  const onToggle = useCallback(id => {
      // setTodos(todos =>
      //   todos.map(todo =>
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      //   ),
      // );
      dispatch({ type: 'TOGGLE', id });
    }, []
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
