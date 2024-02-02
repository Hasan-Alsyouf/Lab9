import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};

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
