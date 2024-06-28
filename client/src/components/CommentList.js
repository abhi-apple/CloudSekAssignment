import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments, onUpdate }) => (
  <div className="space-y-4">
    {comments.map((comment) => (
      <CommentItem key={comment._id} comment={comment} onUpdate={onUpdate} />
    ))}
  </div>
);

export default CommentList;
