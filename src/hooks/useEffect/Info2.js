import React, {useState, useEffect} from 'react';

const Info2 = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('최초 렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
    // 언마운트되기 직전에 호출된다.
    return () => {
      console.log('언마운트되기 바로 전에 호출됩니다!')
    }
  }, []);
  
  useEffect(() => {
    console.log('이름이 변경되었습니다!');
    console.log({
      name,
      nickname
    });
    // 업데이트 직전에 호출된다.
    return () => {
      console.log('name이 변경되기 직전에 호출된다. name: ' + name);
    }
  }, [name]);

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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

export default Info2;