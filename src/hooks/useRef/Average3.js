import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  // 배열.reduce((누적값, 현재값, 인덱스, 요소) => { return 결과 }, 초깃값);
  const sum = numbers.reduce((acc, num) => acc + num);
  return sum / numbers.length;
}

const Average3 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  // useRef를 이용하여 로컬 변수 사용하기: avg.current로 값을 사용한다.
  const avg = useRef(0);

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
    // useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킨다.
    inputEl.current.focus();
  }, [number, list]);

  // list가 변경되면 getAverage()가 실행된다. --> refresh
  // useMemo(): 일반 값의 재사용
  avg.current = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg.current}
      </div>
    </div>
   )
}

export default Average3;
