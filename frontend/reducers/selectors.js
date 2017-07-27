import { values } from 'lodash';

// { posts } === state.posts
export const selectAllPhotos = ({ images }) => {
  return values(images);
};

export const selectAllUserPhotos = ({ images }) => {
  return values(images);
};
