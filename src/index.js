// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// //import {BrowserRouter} from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import { createStore, applyMiddleware} from 'redux'
import  thunk from 'redux-thunk';
import reducer from './_reducers';
import * as serviceWorker from './serviceWorker';

// import configureStore from './_store/configureStore';

const store = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();

