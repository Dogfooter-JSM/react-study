import React from 'react';
import CounterContainer from './redux-middleware/redux-thunk/containers/SampleContainer';
import SampleContainer from './redux-middleware/redux-thunk/containers/SampleContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <SampleContainer />
    </div>
  )
}

export default App;