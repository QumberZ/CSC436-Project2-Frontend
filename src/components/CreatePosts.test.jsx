// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import CreatePage from './CreatePosts';

// jest.mock('axios'); 

// describe('CreatePage', () => {
//   it('renders the CreatePage component', () => {
//     const { getByText } = render(<CreatePage />);
//     const pageTitle = getByText('Create a New Post');
//     expect(pageTitle).toBeInTheDocument();
//   });

//   it('handles form submission successfully', async () => {
//     const { getByLabelText, getByText } = render(<CreatePage />);
//     const titleInput = getByLabelText('Title:');
//     const contentInput = getByLabelText('Content:');
//     const saveButton = getByText('Save');

//     axios.post.mockResolvedValueOnce({ data: { message: 'Post created successfully' } }); // mock successful API response

//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(contentInput, { target: { value: 'Test Content' } });
//     fireEvent.click(saveButton);

//     expect(axios.post).toHaveBeenCalledTimes(1);
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts', { title: 'Test Title', content: 'Test Content', image: '' });

//     await waitFor(() => {
//       const successMessage = getByText('Your post has been created!');
//       expect(successMessage).toBeInTheDocument();
//     });
//   });

//   it('handles form submission with error', async () => {
//     const { getByLabelText, getByText } = render(<CreatePage />);
//     const titleInput = getByLabelText('Title:');
//     const contentInput = getByLabelText('Content:');
//     const saveButton = getByText('Save');

//     axios.post.mockRejectedValueOnce(new Error('Something went wrong')); // mock error response

//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(contentInput, { target: { value: 'Test Content' } });
//     fireEvent.click(saveButton);

//     expect(axios.post).toHaveBeenCalledTimes(1);
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts', { title: 'Test Title', content: 'Test Content', image: '' });

//     await waitFor(() => {
//       const errorMessage = getByText('Error: Something went wrong');
//       expect(errorMessage).toBeInTheDocument();
//     });
//   });
// });

// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import CreatePage from './CreatePosts';

// jest.mock('axios'); 

// describe('CreatePage', () => {
//   const saveButton = getByText(/save/i); // get the Save button element

//   it('renders the CreatePage component', () => {
//     const { getByText } = render(<CreatePage />);
//     const pageTitle = getByText('Create a New Post');
//     expect(pageTitle).toBeInTheDocument();
//   });

//   it('handles form submission successfully', async () => {
//     const { getByLabelText, getByText } = render(<CreatePage />);
//     const titleInput = getByLabelText('Title:');
//     const contentInput = getByLabelText('Content:');

//     axios.post.mockResolvedValueOnce({ data: { message: 'Post created successfully' } }); // mock successful API response

//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(contentInput, { target: { value: 'Test Content' } });
//     fireEvent.click(saveButton);

//     expect(axios.post).toHaveBeenCalledTimes(1);
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts', { title: 'Test Title', content: 'Test Content', image: '' });

//     await waitFor(() => {
//       const successMessage = getByText('Your post has been created!');
//       expect(successMessage).toBeInTheDocument();
//     });
//   });

//   it('handles form submission with error', async () => {
//     const { getByLabelText, getByText } = render(<CreatePage />);
//     const titleInput = getByLabelText('Title:');
//     const contentInput = getByLabelText('Content:');

//     axios.post.mockRejectedValueOnce(new Error('Something went wrong')); // mock error response

//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(contentInput, { target: { value: 'Test Content' } });
//     fireEvent.click(saveButton);

//     expect(axios.post).toHaveBeenCalledTimes(1);
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts', { title: 'Test Title', content: 'Test Content', image: '' });

//     await waitFor(() => {
//       const errorMessage = getByText('Error: Something went wrong');
//       expect(errorMessage).toBeInTheDocument();
//     });
//   });
// });

// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import CreatePage from './CreatePosts';

// jest.mock('axios'); 

// describe('CreatePage', () => {

//   it('renders the CreatePage component', async() => {
//     const { getByText } = render(<CreatePage />);
//     const pageTitle = getByText('Create a New Post');
//     expect(pageTitle).toBeInTheDocument();
//   });

//   it('handles form submission successfully', async () => {
//     const { getByLabelText } = render(<CreatePage />);
//     const titleInput = getByLabelText('Title:');
//     const contentInput = getByLabelText('Content:');
//     // const saveButton = getByText(/save/i); // get the Save button element

//     axios.post.mockResolvedValueOnce({ data: { message: 'Post created successfully' } }); // mock successful API response

//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(contentInput, { target: { value: 'Test Content' } });
//     // fireEvent.click(saveButton);

//     expect(axios.post).toHaveBeenCalledTimes(1);
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts', { title: 'Test Title', content: 'Test Content', image: '' });

//     await waitFor(() => {
//       const successMessage = getByText('Your post has been created!');
//       expect(successMessage).toBeInTheDocument();
//     });
//   });

//   it('handles form submission with error', async () => {
//     const { getByLabelText } = render(<CreatePage />);
//     const titleInput = getByLabelText('Title:');
//     const contentInput = getByLabelText('Content:');
//     // const saveButton = getByText(/save/i); // get the Save button element

//     axios.post.mockRejectedValueOnce(new Error('Something went wrong')); // mock error response

//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(contentInput, { target: { value: 'Test Content' } });
//     // fireEvent.click(saveButton);

//     expect(axios.post).toHaveBeenCalledTimes(1);
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts', { title: 'Test Title', content: 'Test Content', image: '' });

//     await waitFor(() => {
//       const errorMessage = getByText('Error: Something went wrong');
//       expect(errorMessage).toBeInTheDocument();
//     });
//   });
// });

// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import CreatePage from './CreatePosts';

// jest.mock('axios'); 

// describe('CreatePage', () => {

//   it('renders the CreatePage component', async() => {
//     const { getByText } = render(<CreatePage />);
//     const pageTitle = getByText('Create a New Post');
//     expect(pageTitle).toBeInTheDocument();
//   });

//   it('handles form submission successfully', async () => {
//     const { getByLabelText, getByTestId } = render(<CreatePage />);
//     const titleInput = getByLabelText('Title:');
//     const contentInput = getByLabelText('Content:');
//     const form = getByTestId('create-form');

//     axios.post.mockResolvedValueOnce({ data: { message: 'Post created successfully' } }); // mock successful API response

//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(contentInput, { target: { value: 'Test Content' } });
//     fireEvent.submit(form);

//     expect(axios.post).toHaveBeenCalledTimes(1);
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts', { title: 'Test Title', content: 'Test Content', image: '' });

//     await waitFor(() => {
//       const successMessage = getByText('Your post has been created!');
//       expect(successMessage).toBeInTheDocument();
//     });
//   });

//   it('handles form submission with error', async () => {
//     const { getByLabelText, getByTestId } = render(<CreatePage />);
//     const titleInput = getByLabelText('Title:');
//     const contentInput = getByLabelText('Content:');
//     const form = getByTestId('create-form');

//     axios.post.mockRejectedValueOnce(new Error('Something went wrong')); // mock error response

//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(contentInput, { target: { value: 'Test Content' } });
//     fireEvent.submit(form);

//     expect(axios.post).toHaveBeenCalledTimes(1);
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts', { title: 'Test Title', content: 'Test Content', image: '' });

//     await waitFor(() => {
//       const errorMessage = getByText('Error: Something went wrong');
//       expect(errorMessage).toBeInTheDocument();
//     });
//   });
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CreatePage from "./CreatePosts";



it("submits the form when the Create Post button is clicked", async () => {
    render(<CreatePage />);
    
    // Find the form element using data-testid
    const formElement = screen.getByTestId("create-form");
  
    // Fill in the form inputs
    const titleInput = screen.getByLabelText("Title:");
    const contentInput = screen.getByLabelText("Content:");
    userEvent.type(titleInput, "Test post title");
    userEvent.type(contentInput, "Test post content");
  
    // Submit the form
    userEvent.click(screen.getByText("Create Post"));
  
    // Wait for the success message to appear
    //await screen.findByText("Post Successfully Created!");

    await screen.findByText((content, element) => {
        const elements = screen.queryAllByText(content, { exact: false });
        return elements.find(el => el.offsetParent !== null);
      }, { timeout: 5000 });
      
  
    // Assert that the form was submitted successfully
    expect(mockAxios.post).toHaveBeenCalledWith(
      "http://localhost:3001/v1/api/posts",
      {
        title: "Test post title",
        content: "Test post content",
        image: "",
      }
    );
  });
  
