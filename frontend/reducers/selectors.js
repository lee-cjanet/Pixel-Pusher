import { values } from 'lodash';

// { posts } === state.posts
export const selectAllPhotos = ({ images }) => {
  return values(images);
};

export const selectAllUserPhotos = ({ images }) => {
  return values(images);
};

export const selectAllGurus = ({ gurus }) => {
  return values(gurus);
};

export const selectAllFollowers = ({ followers }) => {
  return values(followers);
};
