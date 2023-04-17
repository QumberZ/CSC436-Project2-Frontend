import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link nav-link-animation" activeClassName="active-nav-link" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" className="nav-link" activeClassName="active-nav-link">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className="nav-link" activeClassName="active-nav-link">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
