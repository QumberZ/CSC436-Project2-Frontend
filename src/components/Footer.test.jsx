import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
test('renders the footer text', () => {
render(<Footer />);
const textElement = screen.getByText(/© 2023 Qumber and Ali Blog Site. All rights reserved./i);
expect(textElement).toBeTruthy();
});
});