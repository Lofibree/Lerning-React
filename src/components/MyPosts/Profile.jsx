import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';

const Profile = (props) => {

  let postsEl = props.state.posts
  .map(p => <Post message={p.message} likeCount={p.likeCount} />);

  return (
    <div>
      <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={postsEl}/>
      </div>
    </div>
  );
};

export default Profile;