import merge from 'lodash/merge';

import { RECEIVE_USER_PROFILE, RECEIVE_USER_PHOTOS } from '../actions/profile_actions';

const defaultState = {
  user: {
    name: "",
    bio: "",
    cover_url: "http://res.cloudinary.com/smilejl/image/upload/c_scale,w_650/v1500680432/2017-7-21/Greg/1_aperture-vintage-212345.jpg",
    headshot_url: "https://ak3.picdn.net/shutterstock/videos/6441428/thumb/1.jpg?i10c=img.resize(height:160)"
  },
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
