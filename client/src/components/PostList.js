import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => (
  <div className="flex flex-col items-center">
    {console.log(posts, "from postlist")}
    {posts.map((post) => (
      <PostItem key={post._id} post={post} />
    ))}
  </div>
);

export default PostList;
