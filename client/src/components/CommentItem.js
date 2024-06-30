import React, { useState } from "react";
import commentService from "../services/commentService";

const CommentItem = ({ comment, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleEdit = async () => {
    await commentService.updateComment(comment._id, editText);
    onUpdate();
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded-md shadow-sm bg-gray-200">
      {isEditing ? (
        <div>
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          <button
            onClick={handleEdit}
            className="mt-2 mr-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="mt-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <div dangerouslySetInnerHTML={{ __html: comment.text }} />
          <p className="text-sm text-gray-500 mt-2">
            Posted on {new Date(comment.createdAt).toLocaleString()}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
