import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_GURUS = 'RECEIVE_GURUS';
export const RECEIVE_SINGLE_GURU = 'RECEIVE_SINGLE_GURU';
export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveFollowers = followers => ({
  type: RECEIVE_FOLLOWERS,
  followers
});

export const receiveGurus = gurus => ({
  type: RECEIVE_GURUS,
  gurus
});

export const fetchFollowers = guru => dispatch => (
  APIUtil.fetchFollowers(guru).then(followers => {
    dispatch(receiveFollowers(followers));
    dispatch(clearErrors());
  }, err => {
    return (dispatch(receiveErrors(err.responseJSON)));
  })
);

export const fetchGurus = follower => dispatch => (
  APIUtil.fetchGurus(follower).then(gurus => {
    dispatch(receiveGurus(gurus));
})
);

export const receiveSingleGuru = guru => ({
  type: RECEIVE_SINGLE_GURU,
  guru
});

export const followGuru = guru => dispatch => (
  APIUtil.followGuru(guru).then(guru => {
    dispatch(receiveSingleGuru(guru));
    dispatch(clearErrors());
  }, err => {
    return (dispatch(receiveErrors(err.responseJSON)));
  })
);

//destory method
