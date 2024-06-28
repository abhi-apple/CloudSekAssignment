import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postService from "../services/postService";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    const response = await postService.getPostById(id);
    setPost(response.data);
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.content}</p>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <CommentList comments={post.comments} onUpdate={fetchPost} />
      <CreateComment postId={id} setPost={setPost} />
      <div className="mt-8">
        <Link
          to="/"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
