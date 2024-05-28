import { getPosts, getPostById, createPost, updatePost, deletePost } from "../httpClient/httpsClient";
const fetchAllPosts = async (params) => {
    try {
        return await getPosts(params);
    } catch (error) {
        console.error('Error fetching all posts in service:', error);
        throw error;
    }
};

const fetchPostById = async (id) => {
    try {
        return await getPostById(id);
    } catch (error) {
        console.error(`Error fetching post with ID ${id} in service:`, error);
        throw error;
    }
};

const addPost = async (post) => {
    try {
        return await createPost(post);
    } catch (error) {
        console.error('Error adding post in service:', error);
        throw error;
    }
};

const modifyPost = async (id, updatedPost) => {
    try {
        return await updatePost(id, updatedPost);
    } catch (error) {
        console.error(`Error updating post with ID ${id} in service:`, error);
        throw error;
    }
};

const removePost = async (id) => {
    try {
        return await deletePost(id);
    } catch (error) {
        console.error(`Error deleting post with ID ${id} in service:`, error);
        throw error;
    }
};

export { fetchAllPosts, fetchPostById, addPost, modifyPost, removePost };
