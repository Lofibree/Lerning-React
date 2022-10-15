import React from 'react';
import s from './MyPosts.module.css';
import moment from 'moment';
import { AiOutlineSend } from 'react-icons/ai'

const MyPosts = (props) => {

  let newPostEl = React.createRef();
  let onAddPost = () => {
    let timeMesse = moment().format('HH:mm');
    props.addPost(timeMesse);
  }

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.updateNewPostText(text);
  }
  // debugger;
  return (
    <div>
      <div className={s.newPostBox}>
        <textarea
          className={s.newPostText}
          onChange={onPostChange}
          ref={newPostEl}
          value={props.value}
        />
        <AiOutlineSend onClick={onAddPost} className={s.btnMess} />
      </div>
      <div className={`${s.posts} ${s.item}`}>
        <h5>My posts</h5>
        {props.postsEl}
      </div>
    </div>
  );
};

export default MyPosts;