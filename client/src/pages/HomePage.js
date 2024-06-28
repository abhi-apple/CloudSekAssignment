// import React, { useState, useEffect } from "react";
// import PostList from "../components/PostList";
// import CreatePostModal from "../components/CreatePostModal";
// import postService from "../services/postService";

// const HomePage = () => {
//   const [posts, setPosts] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await postService.getPosts();
//       setPosts(response.data);
//       console.log(response, "data");
//     };
//     fetchPosts();
//   }, []);

//   const addPost = async (newPost) => {
//     const response = await postService.createPost(newPost);
//     setPosts([response.data, ...posts]);
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-3xl font-bold">Posts</h1>
//         <button
//           onClick={openModal}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Create Post
//         </button>
//       </div>
//       <PostList posts={posts} />
//       <CreatePostModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         addPost={addPost}
//       />
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import CreatePostModal from "../components/CreatePostModal";
import postService from "../services/postService";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await postService.getPosts();
      setPosts(response.data);
      console.log(response, "data");
    };
    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Posts</h1>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
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
    </div>
  );
};

export default HomePage;
