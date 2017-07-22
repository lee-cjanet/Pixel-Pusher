import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveSinglePhoto = (photo) => ({
  type: RECEIVE_SINGLE_PHOTO,
  photo
});

export const fetchSinglePhoto = id => dispatch => (
  APIUtil.fetchSinglePhoto(id).then(photo => {
    dispatch(receiveSinglePhoto(photo));
    dispatch(clearErrors());
  }, err => {
    return (dispatch(receiveErrors(err.responseJSON)));
  })
);
