// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import PostDetails from './PostDetails';
import AddPost from './AddPost';  // Import the AddPost component
import './Dashboard.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/posts');
        if (response.ok) {
          const fetchedPosts = await response.json();
          setPosts(fetchedPosts);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    const post = posts.find((p) => p.id === postId);
    setSelectedPost(post);
  };

  const handleEditPost = async (updatedPost) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${updatedPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });

      if (response.ok) {
        // If the update is successful, update the posts state
        const updatedPosts = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
        setPosts(updatedPosts);
        setSelectedPost(null); // Clear the selected post after updating
      } else {
        console.error('Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
        setSelectedPost(null); // Clear the selected post after deleting
      } else {
        console.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Router>
      <div className="dashboard">
        <header>
          <h1>My Blog</h1>
          <nav>
            <ul>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/add-post">Add Post</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/posts"
            element={<Posts posts={posts} onPostClick={handlePostClick} />}
          />
          
          <Route
            path="/posts/:postId"
            element={<PostDetails post={selectedPost} onEdit={handleEditPost} onDelete={handleDeletePost} />}
          />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Dashboard;