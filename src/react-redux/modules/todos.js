import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 1. 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

let id = 3; // insert가 호출될 때마다 1씩 더해진다.

// 2. 액션 생성 함수 (redux-actions 라이브러리 사용)
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 초기 할 일 목록
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

// 3. reducer 함수 정의 (redux-actions 라이브러리 사용) : immer 사용 (produce)
const todos = handleActions(
  {
    // action 값의 payload 이름을 새로 설정 : action.payload --> input
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    // action 값의 payload 이름을 새로 설정 : action.payload --> todo
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    // action 값의 payload 이름을 새로 설정 : action.payload --> id
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    // action 값의 payload 이름을 새로 설정 : action.ipayloadd --> id
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;



/* 2. 액션 생성 함수
// 입력 값 변경 시
export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});

// 입력 값 추가
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});
// 선택 항목 선택/선택 해제
export const toggle = id => ({
  type: TOGGLE,
  id
});
// 선택 항목 제거
export const remove = id => ({
  type: REMOVE,
  id
});
*/

/* 3. reducer 함수 정의
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}
*/
