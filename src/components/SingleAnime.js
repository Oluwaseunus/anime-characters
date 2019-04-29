import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSingleAnime } from '../actions';

const SingleAnime = ({ characters, fetchSingleAnime, location }) => {
  const { anime } = location.state;

  useEffect(() => {
    fetchSingleAnime(anime.mal_id);
  }, [anime.mal_id, fetchSingleAnime]);

  return (
    <div>
      <p>Title: {anime.title}</p>
      <p>Type: {anime.type}</p>
      <p>Synopsis: {anime.synopsis}</p>
      {anime.duration && <p>Duration: {anime.duration}</p>}
      {anime.episodes && <p>Number of episodes: {anime.episodes}</p>}
      {anime.rating && <p>Rating: {anime.rating}</p>}
      {anime.status && <p>Status: {anime.status}</p>}
      <hr />
      {characters ? (
        'Loading...'
      ) : (
        <ul>
          {characters.map(character => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = ({ characters }) => ({
  characters
});

export default connect(
  mapStateToProps,
  {
    fetchSingleAnime
  }
)(SingleAnime);
