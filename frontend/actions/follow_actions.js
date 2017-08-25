import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_GURUS = 'RECEIVE_GURUS';
export const RECEIVE_SINGLE_GURU = 'RECEIVE_SINGLE_GURU';
export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_SINGLE_FOLLOWER = 'RECEIVE_FOLLOWERS';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// when you follow a person, receive this info & update YOUR profile
export const receiveSingleGuru = guru => ({
  type: RECEIVE_SINGLE_GURU,
  guru
});
//
export const receiveSingleFollower = guru => ({
  type: RECEIVE_SINGLE_GURU,
  guru
});
//
// export const receiveGurus = gurus => ({
//   type: RECEIVE_GURUS,
//   gurus
// });
//
// export const receiveFollowers = followers => ({
//   type: RECEIVE_FOLLOWERS,
//   followers
// });

export const removeFollow = follower => ({
  type: REMOVE_FOLLOW,
  follower
});


// export const fetchAllGurus = user_id => dispatch => (
//   APIUtil.fetchAllGurus(user_id).then(gurus => {
//     dispatch(receiveGurus(gurus));
//     dispatch(clearErrors());
//   }, err => {
//     return (dispatch(receiveErrors(err.responseJSON)));
//   })
// );
//
// export const fetchAllFollowers = user_id => dispatch => (
//   APIUtil.fetchAllFollowers(user_id).then(followers => {
//     dispatch(receiveFollowers(followers));
//     dispatch(clearErrors());
//   }, err => {
//     return (dispatch(receiveErrors(err.responseJSON)));
//   })
// );

export const createGuru = guru_id => dispatch => (
  APIUtil.createGuru(guru_id).then(guru => {
    dispatch(receiveSingleGuru(guru));
    dispatch(clearErrors());
  }, err => {
    return (dispatch(receiveErrors(err.responseJSON)));
  })
);

export const createFollower = follower_id => dispatch => (
  APIUtil.createFollower(follower_id).then(follower => {
    dispatch(receiveSingleFollower(follower));
    dispatch(clearErrors());
  }, err => {
    return (dispatch(receiveErrors(err.responseJSON)));
  })
);

export const destroyFollower = follower_id => dispatch => {
  return APIUtil.destroyFollower(follower_id)
    .then( follower => dispatch(removeFollow(follower)) );
};
