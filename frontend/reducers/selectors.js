import { values } from 'lodash';

// { posts } === state.posts
export const selectAllPhotos = ({ images }) => values(images);

export const selectSinglePhoto = ({ images }, id) =>
{
  return images[id] || {};
};

// export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
//   const foundItem = pokemonDetail.items.find(item => item.id === itemId);
//   return foundItem || {};
// };
//
// export const selectAllPokemon = ({ pokemon }) => values(pokemon.entities);
