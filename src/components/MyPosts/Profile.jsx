import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  let newPostEl = React.createRef();

  let addPostR = () => {
    // props.addPost();
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostEl.current.value;
    // props.updateNewPostText(text);
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
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
            value={props.state.profilePage.newPostText}
          />
          
        </div>
        <MyPosts
          postList={props.state}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile;