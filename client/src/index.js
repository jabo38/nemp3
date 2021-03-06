import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from 'serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import rootReducer from 'reducers';
import socket from './middleware/socket';

const CLOUD_URL = 'https://d2gjz4j3cdttft.cloudfront.net';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk, socket));

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

export { CLOUD_URL };
