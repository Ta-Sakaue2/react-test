import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reduce/rootReducer'
import { getPosts } from './actions/Aciton'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

store.dispatch(getPosts())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals();
