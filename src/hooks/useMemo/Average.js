import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 숫자가 입력될 때마다 refresh
  const onChange = e => {
    setNumber(e.target.value);
  }

  // 등록 버튼을 클릭하면 숫자 리스트가 변경 --> useMemo의 getAverage() 호출 --> refresh
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }

  // list가 변경되면 getAverage()가 실행된다. --> refresh
  // 렌더링 중에 getAverage() 실행된다.
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

export default Average;
