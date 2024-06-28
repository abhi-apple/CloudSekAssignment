import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const truncatedContent =
    post.content.length > 100
      ? `${post.content.slice(0, 100)}...`
      : post.content;

  return (
    <div className="relative p-6 w-full max-w-lg mx-auto mb-6 border rounded-md shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{truncatedContent}</p>
      <Link to={`/posts/${post._id}`} className="text-blue-500 hover:underline">
        Read more
      </Link>
      <div className="absolute top-4 right-4 bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
        {post.comments.length}{" "}
        {post.comments.length === 1 ? "Comment" : "Comments"}
      </div>
    </div>
  );
};

export default PostItem;
