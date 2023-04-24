import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  test('renders welcome text', () => {
    render(<Home />);
    const welcomeElement = screen.getByText(/Welcome to our Blog Site!/i);
    expect(welcomeElement).toBeTruthy();
  });

  test('renders blog post images', () => {
    render(<Home />);
    const blogPostImages = screen.getAllByAltText(/Blog post/i);
    expect(blogPostImages).toHaveLength(3);
  });
});
