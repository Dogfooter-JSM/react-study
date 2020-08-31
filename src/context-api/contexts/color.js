import React, { createContext, useState } from 'react';

// 기본값은 Provider를 사용하지 않았을 때만 사용된다.
// Context : state와 action 객체를 따로 분리 (상태값과 상태를 변경하는 함수로 구성)
const ColorContext = createContext({
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
export { ColorProvider, ColorConsumer };

export default ColorContext;