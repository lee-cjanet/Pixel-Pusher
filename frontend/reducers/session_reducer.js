import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultState = {currentUser: {} };

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const user = action.currentUser;
      return merge({}, state, {currentUser: user});
    default:
      return state;
  }
};

export default SessionReducer;
