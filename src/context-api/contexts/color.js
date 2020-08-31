import React, { createContext, useState } from 'react';

// Context === Store

// Context.Provider : 컨텍스트의 상태 값을 변경
// Context.Consumer : 컨텍스트의 상태 값을 조회

// Context : state 객체(상태값)와 action 객체(상태를 변경하는 함수)로 구성
const ColorContext = createContext({
  // 기본값은 Provider를 사용하지 않았을 때만 사용된다.
  state: {color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {}
  }
});

// 컨텍스트의 상태값과 상태변경 함수를 제공하여 children 렌더링
const ColorProvider = ({children}) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  // Context의 value는 값과 함수를 갖을 수 있다.
  // stete 객체와 action 객체를 분리
  const value = {
    state: {color, subcolor},
    actions: {setColor, setSubcolor}
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
// 컨텍스트의 상태값을 사용할 수 있도록 한다.
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };  // import { ColorProvider, ColorConsumer } from 'color';

// export default는 파일 당 하나만 export할 수 있다.
export default ColorContext;  // import ColorContext from 'color';