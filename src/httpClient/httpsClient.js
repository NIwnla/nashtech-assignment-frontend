import axios from 'axios';

const BASE_URL = 'http://localhost:3000/posts';

// Function to handle GET requests to fetch all posts
const getPosts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

// Function to handle GET request to fetch a post by ID
const getPostById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching post with ID ${id}:`, error);
        throw error;
    }
};

// Function to handle POST request to create a new post
const createPost = async (post) => {
    try {
        const response = await axios.post(BASE_URL, post);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};

// Function to handle PUT request to update a post by ID
const updatePost = async (id, updatedPost) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, updatedPost);
        return response.data;
    } catch (error) {
        console.error(`Error updating post with ID ${id}:`, error);
        throw error;
    }
};

// Function to handle DELETE request to delete a post by ID
const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting post with ID ${id}:`, error);
        throw error;
    }
};

// Exporting all the functions for use in other parts of the application
export { getPosts, getPostById, createPost, updatePost, deletePost };
