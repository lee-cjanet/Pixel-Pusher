import merge from 'lodash/merge';

import { RECEIVE_SINGLE_PHOTO } from '../actions/photo_actions';

const PhotosReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_PHOTO:
      return action.photo;
    default:
      return state;
  }
};

export default PhotosReducer;
