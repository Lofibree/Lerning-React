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
        <div className={s.newPostBox}>
          <button onClick={addPostR} className={s.newPostBtn}>
            New Post
          </button>
          <textarea 
            className={s.newPostText}
            onChange={onPostChange}
            ref={newPostEl}
            value={props.profilePage.newPostText}
          />
        </div>
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