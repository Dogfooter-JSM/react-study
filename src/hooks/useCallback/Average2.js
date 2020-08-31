import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

const Average2 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  // number 혹은 list가 바뀌었을 때만 함수 생성
  // useCallback(): 함수의 재사용
  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  // list가 변경되면 getAverage()가 실행된다. --> refresh
  // useMemo(): 일반 값의 재사용 
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
   )
}

export default Average2;
