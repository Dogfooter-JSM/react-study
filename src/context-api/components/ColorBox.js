import React, { useContext } from 'react';
// import { ColorConsumer } from '../contexts/color';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  // 클래스형 컴포넌트에서는 Render Props 패턴(children에 함수를 전달)을 사용해야 한다.
  const { state } = useContext(ColorContext); // state: { color, subcolor }
  
  return (
    // <ColorConsumer>
    //   {({ state }) => (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor
        }}
      />
    </>
    //   )}
    // </ColorConsumer>
  );
};

export default ColorBox;