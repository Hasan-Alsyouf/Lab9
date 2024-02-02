import React, {  useRef } from 'react';

const AddPost = ({ onAddPost }) => {
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);

  const handleAddPost = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          author: authorRef.current.value,
          content: contentRef.current.value,
        }),
      });

      if (response.ok) {
        const addedPost = await response.json();
        onAddPost(addedPost);
        // Clear the form fields after adding the post
        formRef.current.reset();
      } else {
        console.error('Failed to add post');
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="add-post">
      <br></br><br></br>
      <h2 style={{ color: 'green',}}>Add New Post</h2>
      <form ref={formRef}>
        <label>
          Title:
          <input type="text" ref={titleRef} />
        </label>
        <label>
          Author:
          <input type="text" ref={authorRef} />
        </label>
        <label>
          Content:
          <textarea ref={contentRef}></textarea>
        </label>
        <button className="btn btn-success" onClick={handleAddPost}>
          Add Post
        </button>
      </form>
      <br></br><br></br>
      <hr></hr>   <hr></hr>   <hr></hr>
    </div>
  );
};

export default AddPost;
