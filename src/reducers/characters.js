import {
  FETCH_SINGLE_ANIME_ENDED,
  FETCH_ALL_ANIME_STARTED
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ANIME_STARTED:
      return [];

    case FETCH_SINGLE_ANIME_ENDED:
      console.log('ACTION', action.payload);
      return [...action.payload];

    default:
      return state;
  }
};
