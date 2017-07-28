import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_SINGLE_PHOTO';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';

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

export const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const fetchAllPhotos = () => dispatch => (
  APIUtil.fetchAllPhotos().then(photos => {
    dispatch(receiveSinglePhoto(photos));
    dispatch(clearErrors());
  }, err => {
    return (dispatch(receiveErrors(err.responseJSON)));
  })
);

export const createSinglePhoto = image => dispatch => (
  APIUtil.createSinglePhoto(image).then(photo => {
    dispatch(receiveSinglePhoto(photo));
    dispatch(clearErrors());
  }, err => {
    return (dispatch(receiveErrors(err.responseJSON)));
  })
);
