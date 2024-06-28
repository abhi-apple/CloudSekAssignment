import axios from "axios";

const API_URL = "https://cloud-sek-assignment.vercel.app/api/posts";

const getPosts = () => axios.get(API_URL);
const getPostById = (id) => axios.get(`${API_URL}/${id}`);
const createPost = (post) => axios.post(API_URL, post);

export default { getPosts, getPostById, createPost };
