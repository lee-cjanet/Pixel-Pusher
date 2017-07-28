import { values } from 'lodash';

// { posts } === state.posts
export const selectAllPhotos = ({ images }) => {
  return values(images);
};

export const selectAllUserPhotos = ({ images }) => {
  return values(images);
};

// export const follows = ({ followers }, userID) => {
//   let answer = Object.keys(followers)[userID];
//   return answer;
// };

export const selectFollowers = ({ followers }) => {
  return values(followers);
};

export const selectGurus = ({ gurus }) => {
  return values(gurus);
};
