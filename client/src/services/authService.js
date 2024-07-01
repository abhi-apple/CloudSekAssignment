import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const addPost = async (token, title, content) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/addpost`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    console.log(response, "serv");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const AuthService = {
  register,
  login,
  addPost,
};

export default AuthService;
