import React from 'react';
import ColorBox from './context-api/components/ColorBox';
// import ColorContext from './context-api/contexts/color';
import { ColorProvider } from './context-api/contexts/color';
import SelectColors from './context-api/components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>

    /*
    // Provider를 사용하여 Context의 value값을 변경
    // Provider를 사용할 때는 value값을 명시해 주어야 제대로 작동한다.
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
    /*
    <div>
      <ColorBox />
    </div>
    */
  );
}

export default App;
