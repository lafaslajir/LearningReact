import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">Lafas</NavLink>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
