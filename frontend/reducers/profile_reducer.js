import merge from 'lodash/merge';

import { RECEIVE_USER_PROFILE, RECEIVE_USER_PHOTOS } from '../actions/profile_actions';

const defaultState = {
  user: null,
  images: null
};

const ProfileReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_PROFILE:
      const profile = action.profile;
      return merge({}, state, { user: profile });
    case RECEIVE_USER_PHOTOS:
      const photos = action.photos;
      return merge({}, state, { images: photos });
    default:
      return state;
  }
};

export default ProfileReducer;
