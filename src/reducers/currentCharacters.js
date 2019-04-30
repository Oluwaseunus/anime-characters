import {
  FETCH_SINGLE_ANIME_CHARACTERS,
  FETCH_ALL_ANIME_STARTED
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ANIME_STARTED:
      return [];

    case FETCH_SINGLE_ANIME_CHARACTERS:
      return [...action.payload];

    default:
      return state;
  }
};
