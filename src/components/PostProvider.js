import React, { useState } from 'react';
import PostContext from './PostContext';

const PostProvider = ({ children }) => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const setPostId = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <PostContext.Provider value={{ selectedPostId, setPostId }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
