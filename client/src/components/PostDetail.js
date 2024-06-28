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
    <div className="max-w-2xl mx-auto p-4 h-screen flex flex-col relative">
      <div className="fixed top-0 left-0 right-0 text-center bg-white p-4 z-10 border-b">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.content}</p>
      </div>
      <div className="flex-1 overflow-auto mt-32 mb-16">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <CommentList comments={post.comments} onUpdate={fetchPost} />
      </div>

      <CreateComment postId={id} setPost={setPost} />
      <div className="fixed bottom-16 left-4 z-10">
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
