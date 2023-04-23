import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import DeletePosts from './DeletePosts';

describe('DeletePosts', () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('should delete a post successfully', async () => {
    const postId = '123';
    const expectedUrl = `http://localhost:3001/v1/api/posts/${postId}`;
    const expectedData = { success: true };
    mockAxios.onDelete(expectedUrl).reply(200, expectedData);

    const result = await DeletePosts(postId);

    expect(result).toEqual(expectedData);
  });

  it('should resolve if the delete request succeeds', async () => {
    const postId = '123';
    const expectedUrl = `http://localhost:3001/v1/api/posts/${postId}`;
    const expectedData = { success: true };
    mockAxios.onDelete(expectedUrl).reply(201, expectedData);
  
    const result = await DeletePosts(postId);
  
    expect(result).toEqual(expectedData);
  });
  
  
});
