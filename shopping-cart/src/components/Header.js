import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; 
const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <NavLink to="/" className="logo">
                <img src="assets/images/logo.png" alt="Logo" />
              </NavLink>
              <ul className="nav">
                <li className="scroll-to-section">
                  <NavLink to="/" className="active">Home</NavLink>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="/men">Men's</NavLink>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="/women">Women's</NavLink>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="/electronics">Electronic's</NavLink>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="/jewel">Jewelry's</NavLink>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="/cart">Cart</NavLink>
                </li>
              </ul>
              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
