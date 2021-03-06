import {
  FETCH_ALL_ANIME_ENDED,
  FETCH_ALL_ANIME_STARTED
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ANIME_STARTED:
      return state;

    case FETCH_ALL_ANIME_ENDED:
      return [...action.payload];

    default:
      return state;
  }
};
