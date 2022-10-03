import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  let newPostEl = React.createRef();

  let addPostR = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.updateNewPostText(text);
    console.log(text);
  }

  return (
    <div>
      <div className={s.content}>
        <ProfileInfo />
        <button onClick={addPostR} className={s.button}>
          New Post
        </button>
        <textarea
          onChange={onPostChange}
          ref={newPostEl}
          value={props.profilePage.newPostText}
        />
        <MyPosts
          addPost={props.addPost}
          postList={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
        />
      </div>
    </div>
  );
};

export default Profile;