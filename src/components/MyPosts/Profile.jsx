import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { AiOutlineSend } from 'react-icons/ai';
import moment from 'moment';

const Profile = (props) => {

  let newPostEl = React.createRef();

  let addPostR = () => {
    // props.addPost();
    let timeMesse = moment().format('HH:mm');
    props.dispatch({ type: 'ADD-POST', time: timeMesse });
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
          {/* <button onClick={addPostR} className={s.newPostBtn}>
            New Post
          </button> */}
          <textarea
            className={s.newPostText}
            onChange={onPostChange}
            ref={newPostEl}
            value={props.state.profilePage.newPostText}
          />
          <AiOutlineSend onClick={addPostR} className={s.btnMess} />


        </div>
        <MyPosts
          state={props.state}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile;