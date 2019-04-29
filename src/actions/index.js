import {
  FETCH_ALL_ANIME_STARTED,
  FETCH_ALL_ANIME_ENDED,
  FETCH_SINGLE_ANIME_STARTED,
  FETCH_SINGLE_ANIME_ENDED
} from './types';

const fetchUrl = 'https://api.jikan.moe/v3';

export const fetchAllAnime = () => async dispatch => {
  dispatch(fetchAllAnimeStarted());

  const response = await fetch(`${fetchUrl}/top/anime`);
  const data = await response.json();
  console.log(data, data.top);
  dispatch(fetchAllAnimeFinisher(data.top));
};

export const fetchSingleAnime = animeId => async dispatch => {
  console.log('Fetching details for ' + animeId);
  dispatch(fetchSingleAnimeStarted());

  const response = await fetch(`${fetchUrl}/anime/${animeId}/characters_staff`);
  const data = await response.json();
  const animeCharacters = data.characters.map(char => ({
    name: char.name,
    id: char.mal_id
  }));

  console.log(animeCharacters);

  dispatch(fetchSingleAnimeFinisher(animeCharacters));
};

const fetchAllAnimeStarted = () => ({
  type: FETCH_ALL_ANIME_STARTED
});

const fetchAllAnimeFinisher = animeList => ({
  type: FETCH_ALL_ANIME_ENDED,
  payload: animeList
});

const fetchSingleAnimeStarted = () => ({
  type: FETCH_SINGLE_ANIME_STARTED
});

const fetchSingleAnimeFinisher = animeDetails => ({
  type: FETCH_SINGLE_ANIME_ENDED,
  payload: animeDetails
});
