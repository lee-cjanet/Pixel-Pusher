import * as APIUtil from '../util/follow_api_util';

import { receiveUserProfile } from './profile_actions';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const createFollow = guru_id => dispatch => (
  APIUtil.createFollow(guru_id).then(user => {
    dispatch(receiveUserProfile(user));
    dispatch(clearErrors());
  }, err => {
    return (dispatch(receiveErrors(err.responseJSON)));
  })
);

export const destroyFollow = guru_id => dispatch => {
  return APIUtil.destroyFollow(guru_id)
    .then( user => dispatch(receiveUserProfile(user)) );
};
