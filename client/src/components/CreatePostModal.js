// import React, { useState } from "react";
// import postService from "../services/postService";
// import AuthService from "../services/authService";

// const CreatePostModal = ({ isOpen, onClose, addPost }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const response = await AuthService.addPost(token, title, content);
//     console.log(response, "res from modal");
//     addPost(response);
//     setTitle("");
//     setContent("");
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Create Post</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Content</label>
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               required
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Post
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePostModal;

import React, { useState } from "react";
import postService from "../services/postService";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

const CreatePostModal = ({ isOpen, onClose, addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await AuthService.addPost(token, title, content);
      console.log(response, "res from modal");
      addPost(response);
      setTitle("");
      setContent("");
      onClose();
    } catch (error) {
      console.error("Error creating post:", error);
      if (error.message === "Token is not valid") {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setError("Failed to create post. Please try again.");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
