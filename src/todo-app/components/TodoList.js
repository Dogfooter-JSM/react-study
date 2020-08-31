import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

// props todos 외의 state 변경으로 부모가 리렌더링 될 경우, 이 TodoList 컴포넌트의 리렌더링을 막는다.
export default React.memo(TodoList);
