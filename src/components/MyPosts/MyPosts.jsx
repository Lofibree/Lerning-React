import React from 'react';
import s from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>
        <div className={`${s.posts} ${s.item}`}>
          <h5>My posts</h5>
          <NewPost title='New Post'/>
          <Post title='Post 1' likeCount='15'/>
          <Post title='Post 2' likeCount='20'/>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;