import axios from "axios";

const API_URL = "http://localhost:8080/api/posts";

const getPosts = () => axios.get(API_URL);
const getPostById = (id) => axios.get(`${API_URL}/${id}`);
const createPost = (post) => axios.post(API_URL, post);

export default { getPosts, getPostById, createPost };
