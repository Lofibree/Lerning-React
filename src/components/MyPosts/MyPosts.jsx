import React from 'react';
import s from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    { id: 0, message: 'Hi, how are you', likeCount: 12 },
    { id: 1, message: 'It is my first post', likeCount: 11 },
]

  return (
    <div>
      <div>
        <div className={`${s.posts} ${s.item}`}>
          <h5>My posts</h5>
          <NewPost title='New Post'/>
          <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
          <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;