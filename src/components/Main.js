import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAllAnime } from '../actions';

const Main = ({ animes, fetchAllAnime }) => {
  useEffect(() => {
    fetchAllAnime();
  }, [fetchAllAnime]);

  return (
    <div>
      <h2>This is the main file</h2>
      <p>This is the other thing</p>
      <div className='animes'>
        {animes.length > 0 ? (
          animes.map(anime => (
            <div key={anime.mal_id}>
              <Link to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
            </div>
          ))
        ) : (
          <p>Fetching AnimeList...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ animes }) => ({
  animes
});

export default connect(
  mapStateToProps,
  {
    fetchAllAnime
  }
)(Main);
