import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-10">
    {console.log(posts, "from postlist")}
    {posts.map((post) => (
      <PostItem key={post._id} post={post} />
    ))}
  </div>
);

export default PostList;
