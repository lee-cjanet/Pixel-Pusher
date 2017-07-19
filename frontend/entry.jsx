import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root.jsx';

// test
import RootReducer from './reducers/root_reducer';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
