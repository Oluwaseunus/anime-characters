import { combineReducers } from 'redux';

import animes from './animes';
import currentCharacters from './currentCharacters';
import singleAnime from './singleAnime';

export default combineReducers({
  animes,
  currentCharacters,
  singleAnime
});
