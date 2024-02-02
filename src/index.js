import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Make sure the path is correct

import PostProvider from './components/PostContext'; // Adjust the import path


ReactDOM.render(
  <React.StrictMode>
  <PostProvider>
    <App />
  </PostProvider>
</React.StrictMode>,
document.getElementById('root')
);
