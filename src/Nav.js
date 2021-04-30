import React, { useState, useEffect } from 'react';
import profileImage from './assets/images/profile.png';
import logo from './assets/images/logo.png';
import './Nav.scss';

function Nav() {
  const [show, handleShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img className="nav__logo" src={logo} alt="netflix logo" />
      <img className="nav__avatar" src={profileImage} alt="netflix logo" />
    </div>
  );
}

export default Nav;
