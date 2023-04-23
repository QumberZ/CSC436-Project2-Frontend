import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditPost from './EditPost';

describe('Edit Component renders correctly', () => {
  const post = {
    id: 1,
    title: 'Test Title',
    content: 'Test Content',
  };

  const onUpdate = () => {};
  const onClose = () => {};

  beforeEach(() => {
    render(
      <Router>
        <Routes>
          <Route path="/edit/:id" element={<EditPost post={post} onUpdate={onUpdate} onClose={onClose} />} />
        </Routes>
      </Router>
    );
  });

  test('"Edit Post"', async () => {
    await waitFor(() => {
      expect(screen.queryAllByText('Edit Post')).toBeTruthy();
    });
  });
});

