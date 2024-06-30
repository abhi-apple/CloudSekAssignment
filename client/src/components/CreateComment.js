import React, { useState } from "react";
import commentService from "../services/commentService";
import RichTextEditor from "./RichTextEditor";

const CreateComment = ({ postId, setPost }) => {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(text, "text this");
    if (!text.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await commentService.createComment({ postId, text });
      setPost((prevPost) => ({
        ...prevPost,
        comments: [...prevPost.comments, response.data],
      }));
      setText("");
    } catch (error) {
      console.error("Error creating comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 ">
      <RichTextEditor value={text} onChange={setText} />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        disabled={!text.trim() || isSubmitting}
      >
        Add Comment
      </button>
    </form>
  );
};

export default CreateComment;
