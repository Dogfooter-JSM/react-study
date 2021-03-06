import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootRecuder, { rootSaga } from './redux-middleware/redux-saga/modules';
// import loggerMiddleware from './redux-middleware/lib/loggerMiddleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

// createStore 함수를 사용하여 스토어를 만들 때 리듀서를 하나만 사용해야 한다.
const store = createStore(
  rootRecuder, 
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
 );

 sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
