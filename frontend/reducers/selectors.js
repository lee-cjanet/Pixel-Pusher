import { values } from 'lodash';

// { posts } === state.posts
export const selectAllPhotos = ({ images }) => {
  return values(images);
};

export const selectSinglePhoto = ({ images }, id) =>
{
  const image = images.find(photo => photo.id === id);
  return image || {};
};
