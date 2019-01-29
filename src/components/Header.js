import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeetup } from '@fortawesome/free-brands-svg-icons/faMeetup';

const Header = () => (
  <header className="header">
    <h1 className="header__title">ReactJS Dallas</h1>
    <FontAwesomeIcon className="header__icon" icon={faMeetup} />
  </header>
);

export default Header;