import { combineReducers } from 'redux';

import animes from './animes';
import characters from './characters';

export default combineReducers({
  animes,
  characters
});
