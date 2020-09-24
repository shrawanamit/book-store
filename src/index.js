import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import combineReducers from './redux/Reducer/combineReducer';



function saveToLocalStorage(combineReducers) {
    try {
        const serializedState = JSON.stringify(combineReducers);
        localStorage.setItem('currentState', serializedState);
    } catch (e) {
        console.log(e);
    }
}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'));
store.subscribe(() => saveToLocalStorage(store.getState()));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
