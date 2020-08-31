import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';

// import React, { useState, Suspense } from 'react';
// const SplitMe = React.lazy(() => import('./code-splitting/SplitMe'));

const SplitMe = loadable(() => import('./code-splitting/SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);

  const onMouseOver = () => {
    SplitMe.preload();  // 로딩시작
  }

  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        {visible && <SplitMe />}
        {/* <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense> */}
      </header>
    </div>
  );
};

/*
import React, { Component } from 'react';

class App extends Component {
  state = {
    SpliteMe: null
  };

  handleClick = async () => {
    const loadModule = await import('./code-splitting/SplitMe');
    this.setState({
      SplitMe: loadModule.default
    });
  };

  render() {
    const { SplitMe } = this.state;
    return(
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    )
  }
}

/*
// import notify from './code-splitting/notify';

function App() {
  const onClick = () => {
    // notify();
    // dynamic import: 모듈에서 default로 내보낸 것은 result.default를 참조해야 사용할 수 있다.
    import('./code-splitting/notify').then(result => result.default());
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}
*/

export default App;