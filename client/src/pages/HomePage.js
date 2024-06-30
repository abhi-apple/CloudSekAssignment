import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../components/PostList";
import CreatePostModal from "../components/CreatePostModal";
import postService from "../services/postService";

const HomePage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signup");
    } else {
      fetchPosts();
    }
  }, [navigate]);

  const fetchPosts = async () => {
    try {
      const response = await postService.getPosts();
      setPosts(response.data);
      console.log(response, "data");
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-4 bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl text-white fixed top-2 left-2 font-bold">
          Posts
        </h1>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-600 fixed right-2 top-2 text-white px-4 py-2 rounded"
        >
          Create Post
        </button>
      </div>
      <PostList posts={posts} />
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={closeModal}
        addPost={addPost}
      />
      <div className="fixed bottom-4 left-4 z-10">
        <button
          onClick={handleLogout}
          className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-400 hover:bg-red-600 focus:ring-primary-800"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
