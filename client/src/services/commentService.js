import axios from "axios";

const API_URL = "http://localhost:8080/api/comments";

const createComment = (comment) => axios.post(API_URL, comment);
const getCommentsByPostId = (postId) =>
  axios.get(API_URL, { params: { postId } });
const updateComment = (commentId, text) =>
  axios.put(`${API_URL}/${commentId}`, { text });

export default { createComment, getCommentsByPostId, updateComment };
