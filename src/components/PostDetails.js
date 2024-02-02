// PostDetails.js
import React, { useState, useEffect } from 'react';

const PostDetails = ({ post, onEdit, onDelete }) => {
  const [updatedTitle, setUpdatedTitle] = useState('');

  useEffect(() => {
    if (post) {
      setUpdatedTitle(post.title);
    }
  }, [post]);

  const handleUpdate = () => {
    if (post) {
      // Create an updatedPost object with the modified title
      const updatedPost = { ...post, title: updatedTitle };
      onEdit(updatedPost);
    }
  };

  const handleDelete = () => {
    if (post) {
      onDelete(post.id);
    }
  };

  return (
    <div className="post-details">
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          {/* Form for updating title */}
          <label>
            Updated Title:
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </label>
          <button onClick={handleUpdate}>Update</button>

          {/* Button for deleting post */}
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>No post selected.</p>
      )}
    </div>
  );
};

export default PostDetails;
