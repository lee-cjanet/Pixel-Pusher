import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const user = action.currentUser;
      return merge({}, nullUser, {currentUser: user});
    default:
      return state;
  }
};

export default SessionReducer;
