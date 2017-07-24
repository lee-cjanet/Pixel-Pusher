import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './components/root.jsx';

// test
import RootReducer from './reducers/root_reducer';
import { signup, login, logout } from './actions/session_actions';
import { fetchSinglePhoto, fetchAllPhotos, clearErrors, receiveErrors } from './actions/photo_actions';
import { selectAllPhotos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  //what content to disable when modal is open
  //currently set to disable html body

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.react = React;

  // test
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPhotos = fetchAllPhotos;
  window.fetchSinglePhoto = fetchSinglePhoto;
  window.clearErrors = clearErrors;
  window.receiveErrors = receiveErrors;
  window.selectAllPhotos = selectAllPhotos;
  //end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
