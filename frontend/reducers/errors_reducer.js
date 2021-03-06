import merge from 'lodash/merge';

import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      // const errors = action.errors;
      return merge([], state, action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
