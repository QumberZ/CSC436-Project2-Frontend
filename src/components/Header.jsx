import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Header.css';
import logo from '../assets/blog-logo.png'

const Header = () => {
  const [loading, setLoading] = useState(false);

  const handleBlogPostsClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }

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
            <NavLink to="/posts" className="nav-link" activeClassName="active-nav-link" onClick={handleBlogPostsClick}>
              Blog Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      {loading && (
        <div className="loading-container">
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
      )  
       
      }
    </header>
  );
};

export default Header;
