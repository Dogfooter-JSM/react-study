import React from 'react';
import CounterContainer from './react-redux/containers/CounterContainer';
import TodosContainer from './react-redux/containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  )
}

export default App;