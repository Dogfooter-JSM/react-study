import React from 'react';
import CounterContainer from './redux-middleware/redux-saga/containers/CounterContainer';
import SampleContainer from './redux-middleware/redux-saga/containers/SampleContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <SampleContainer />
    </div>
  )
}

export default App;