import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('renders logo', () => {
    render(<Router><Header /></Router>);
    const logoElement = screen.getByAltText('Blog Logo');
    expect(logoElement).toBeTruthy();
  });

  test('renders Home link', () => {
    render(<Router><Header /></Router>);
    const homeLinkElement = screen.getByText(/Home/i);
    expect(homeLinkElement).toBeTruthy();
  });

  test('renders Create Post link', () => {
    render(<Router><Header /></Router>);
    const createPostLinkElement = screen.getByText(/Create Post/i);
    expect(createPostLinkElement).toBeTruthy();
  });

  test('renders Blog Posts link', () => {
    render(<Router><Header /></Router>);
    const blogPostsLinkElement = screen.getByText(/Blog Posts/i);
    expect(blogPostsLinkElement).toBeTruthy();
  });
});
