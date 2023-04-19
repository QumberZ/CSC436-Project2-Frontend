import axios from "axios";
const DeletePosts = async (postId) => {
    const URL = `http://localhost:3001/v1/api/posts/${postId}`;
  
    try {
      const response = await axios.delete(URL);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };
  
  export default DeletePosts;