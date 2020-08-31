import React from 'react';
import useInputs from './useInputs';

const Info4 = () => {
  // useInputs가 반환하는 state 값과 onChange를 사용할 수 있다.
  // onChange 함수를 호출하면 useInputs 함수 내에서 onChange 이벤트 값을 이용하여 수정된 state 값을 리턴한다.
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });

  // state로부터 각 값을 얻는다.
  const {name, nickname} = state;

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

export default Info4;