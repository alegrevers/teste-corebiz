import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/webmotors.svg';
import './header.css';

const Header = () => (
  <header>
    <div className="main">
      <div className="header">
        <Link to="/">
            <img src={logo} alt="header-logo"></img>
        </Link>
      </div>
    </div>
  </header>
)

export default Header

