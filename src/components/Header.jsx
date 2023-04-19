import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

import logo from '../assets/blog-logo.png'

const Header = () => {
  return (
    <header>
         <img src={logo} alt="Blog Logo" className="logo"/> 
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link nav-link-animation" activeClassName="active-nav-link" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" className="nav-link" activeClassName="active-nav-link">
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className="nav-link" activeClassName="active-nav-link">
              Blog Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
