import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__title'>
        Unofficial My Anime List
      </Link>
    </header>
  );
};

export default Header;
