import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export const RECEIVE_USER_PHOTOS = 'RECEIVE_USER_PHOTOS';
export const RESET_PROFILE = 'RESET_PROFILE';

export const resetProfile = () => ({
  type: RESET_PROFILE
});

export const receiveUserProfile = profile => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

export const fetchUserProfile = id => dispatch => (
  APIUtil.fetchUserProfile(id).then(profile => (
    dispatch(receiveUserProfile(profile))
  ))
);

export const receiveUserPhotos = photos => ({
  type: RECEIVE_USER_PHOTOS,
  photos
});

export const fetchUserPhotos = id => dispatch => (
  APIUtil.fetchUserPhotos(id).then(photos => (
    dispatch(receiveUserPhotos(photos))
  ))
);
