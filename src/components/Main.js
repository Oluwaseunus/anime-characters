import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAllAnime } from '../actions';

const Main = ({ animes, fetchAllAnime }) => {
  useEffect(() => {
    fetchAllAnime();
  }, [fetchAllAnime]);

  return (
    <>
      <div className='animes'>
        {animes.length > 0 ? (
          animes.map(anime => (
            <div className='anime' key={anime.mal_id}>
              <Link to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
            </div>
          ))
        ) : (
          <div className='loading'>
            <ReactLoading type='spin' color='#333' />
          </div>
        )}
      </div>
    </>
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
