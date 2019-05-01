import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';

import { fetchSingleAnime } from '../actions';

const SingleAnime = props => {
  const { currentCharacters, fetchSingleAnime, match, singleAnime } = props;

  const [sortValue, setSortValue] = useState(true);

  useEffect(() => {
    fetchSingleAnime(match.params.id);
  }, [fetchSingleAnime, match.params.id]);

  const handleSort = () => {
    setSortValue(!sortValue);
  };

  currentCharacters.sort((a, b) => {
    if (sortValue) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return nameA > nameB ? 1 : nameA < nameB ? -1 : 0;
    }
    return a.mal_id - b.mal_id;
  });

  return (
    <>
      {singleAnime.image_url ? (
        <div className='single'>
          <img
            className='single__image'
            src={singleAnime.image_url}
            alt={`${singleAnime.title} poster`}
          />
          <div className='single__details'>
            <h2
              style={{
                textAlign: 'center'
              }}
            >
              {singleAnime.title}
            </h2>
            <p>Type: {singleAnime.type}</p>
            <p>Synopsis: {singleAnime.synopsis}</p>
            <p>Duration: {singleAnime.duration}</p>
            <p>Number of episodes: {singleAnime.episodes}</p>
            <p>Rating: {singleAnime.rating}</p>
            <p>Status: {singleAnime.status}</p>
          </div>

          {currentCharacters.length > 0 ? (
            <div className='characters'>
              <div className='characters__sort'>
                <h3>Characters</h3>
                <button
                  onClick={handleSort}
                  className='characters__sort-button'
                >
                  Sort by {`${sortValue ? 'id' : 'name'}`}
                </button>
              </div>

              <div className='characters__list'>
                {currentCharacters.length > 0 &&
                  currentCharacters.map(character => (
                    <div key={character.mal_id} className='characters__single'>
                      <img
                        src={character.image_url}
                        alt={character.name}
                        className='characters__single-avatar'
                      />
                      <p>Name: {character.name}</p>
                      <p>id: {character.mal_id}</p>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <div className='loading'>
          <ReactLoading type='spin' color='#333' />
        </div>
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
