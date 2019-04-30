import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSingleAnime } from '../actions';

const SingleAnime = props => {
  const { currentCharacters, fetchSingleAnime, match, singleAnime } = props;

  useEffect(() => {
    fetchSingleAnime(match.params.id);
  }, [fetchSingleAnime, match.params.id]);

  console.log('Rendering!', singleAnime);
  console.log(singleAnime);

  return (
    <>
      {singleAnime.image_url ? (
        <div>
          <img
            src={singleAnime.image_url}
            alt={`${singleAnime.title} poster`}
          />
          <p>Title: {singleAnime.title}</p>
          <p>Type: {singleAnime.type}</p>
          <p>Synopsis: {singleAnime.synopsis}</p>
          <p>Duration: {singleAnime.duration}</p>
          <p>Number of episodes: {singleAnime.episodes}</p>
          <p>Rating: {singleAnime.rating}</p>
          <p>Status: {singleAnime.status}</p>
          <hr />

          {currentCharacters.length > 0 ? (
            <div>
              <h3>Characters</h3>
              {currentCharacters.map(character => (
                <div key={character.id}>
                  <img src={character.image_url} alt={character.name} />
                  <p>Name: {character.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        'Loading details...'
      )}
    </>
  );
};

const mapStateToProps = ({ singleAnime, currentCharacters }) => ({
  singleAnime,
  currentCharacters
});

export default connect(
  mapStateToProps,
  {
    fetchSingleAnime
  }
)(SingleAnime);
