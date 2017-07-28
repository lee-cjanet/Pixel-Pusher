import merge from 'lodash/merge';

import {
  RECEIVE_GURUS,
  RECEIVE_SINGLE_GURU,
  RECEIVE_FOLLOWERS
} from '../actions/photo_actions';

const defaultState = {
  gurus: {},
  followers: {}
};

const FollowsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_GURU:
      return merge({}, state, action.guru);
    case RECEIVE_GURUS:
      return Object.assign({}, state, { gurus: action.gurus });
    case RECEIVE_FOLLOWERS:
      return Object.assign({}, state, { followers: action.followers });
    default:
      return state;
  }
};

export default FollowsReducer;
