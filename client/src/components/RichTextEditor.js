import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      className="bg-white"
      value={value}
      onChange={onChange}
      theme="snow"
    />
  );
};

export default RichTextEditor;
