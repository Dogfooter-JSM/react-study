import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info3 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  // state로부터 각 값을 얻는다.
  const {name, nickname} = state;

  // input 갯수에 관계없이 간단히 처리할 수 있다.
  const onChange = e => {
    dispatch(e.target); // --> reducer(state, e.target);
  }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info3;