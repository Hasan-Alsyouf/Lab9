// src/components/Post.js
import React from 'react';
import './Posts.css'; // Import CSS file

const Post = ({ post, onClick }) => {
  return (
    <div className="post" onClick={() => onClick(post.id)}>
  
  <h5><span style={{ color: 'purple' }}>Author:</span> {post.author}</h5>
      <h5 ><span style={{ color: 'red' }}>Title:</span> {post.title}</h5>
      <h5><span style={{ color: 'green' }}>Content:</span> {post.content}</h5>
    </div>
  );
};

export default Post;
