import React from 'react';
import s from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {

  return (
    <div>
      <div>
        <div className={`${s.posts} ${s.item}`}>
          <h5>My posts</h5>
          <NewPost title='New Post' />
          {props.posts}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;