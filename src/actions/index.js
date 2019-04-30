import {
  FETCH_ALL_ANIME_STARTED,
  FETCH_ALL_ANIME_ENDED,
  FETCH_SINGLE_ANIME_STARTED,
  FETCH_SINGLE_ANIME_ENDED,
  FETCH_SINGLE_ANIME_CHARACTERS
} from './types';

const fetchUrl = 'https://api.jikan.moe/v3';

const fetchOrWait = func => {
  try {
    func();
  } catch (error) {
    setTimeout(() => {
      func();
    }, 3000);
  }
};

export const fetchAllAnime = () => dispatch => {
  dispatch(fetchAllAnimeStarted());

  const fetchData = async () => {
    const response = await fetch(`${fetchUrl}/top/anime`);
    const data = await response.json();
    dispatch(fetchAllAnimeFinisher(data.top));
    console.log(data, data.top);
  };

  fetchOrWait(fetchData);
};

export const fetchSingleAnime = animeId => async dispatch => {
  console.log('Fetching details for ' + animeId);
  dispatch(fetchSingleAnimeStarted());

  const fetchData = async () => {
    const response = await fetch(
      `${fetchUrl}/anime/${animeId}/characters_staff`
    );
    const anime = await fetch(`${fetchUrl}/anime/${animeId}`);
    const details = await anime.json();
    const data = await response.json();
    dispatch(fetchSingleAnimeFinisher(details));
    dispatch(fetchCurrentCharacters(data.characters));
  };

  fetchOrWait(fetchData);
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

const fetchCurrentCharacters = data => ({
  type: FETCH_SINGLE_ANIME_CHARACTERS,
  payload: data
});
