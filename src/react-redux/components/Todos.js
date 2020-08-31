import React from 'react';

// 할 일 표시
const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

// 할 일 목록 표시 컨테이너
const Todos = ({
  // 리덕스(todos) state 값
  input,  // 인풋에 입력되는 텍스트
  todos,  // 할 일 목록에 들어 있는 객체
  // 리덕스(todos) dispatch 함수
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = e => {
    e.preventDefault();
    // 리덕스(todos)의 액션 생성 함수 insert(text) 호출하여, reducer 함수(todos)를 실행한다.
    onInsert(input);
    // 리덕스(todos)의 액션 생성 함수(changeInput(input)) 호출하여, reducer 함수(todos)를 실행한다.
    onChangeInput('');  // 등록 후 인풋 초기화
  };
  // 리덕스(todos)의 액션 생성 함수(changeInput(inpute)) 호출하여, reducer 함수(todos)를 실행한다.
  const onChange = e => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;