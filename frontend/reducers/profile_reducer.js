import merge from 'lodash/merge';

import {
  RECEIVE_USER_PROFILE,
  RESET_PROFILE,
  RECEIVE_USER_PHOTOS
 } from '../actions/profile_actions';
import { RECEIVE_SINGLE_PHOTO } from '../actions/photo_actions';

const defaultState = {
  user: {
    name: "",
    bio: "",
    headshot_url: "http://res.cloudinary.com/smilejl/image/upload/v1501098612/profile%20pictures/IMG_2023.png",
    followers: {},
    gurus: {}
  },
  images: {},
};

const ProfileReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_PROFILE:
      const profile = action.profile;
      const images = state.images;
      return merge({}, { user: profile, images });
    case RECEIVE_USER_PHOTOS:
      const photos = action.photos;
      const user = state.user;
      return merge({}, { images: photos, user });
    case RECEIVE_SINGLE_PHOTO:
      const photo = action.photo;
      return merge({}, state, { images: { photo }, user });
    case RESET_PROFILE:
      return defaultState;
    default:
      return state;
  }
};

export default ProfileReducer;
