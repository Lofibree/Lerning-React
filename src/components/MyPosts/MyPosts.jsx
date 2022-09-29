import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let addPost = () => {
    let text = newPostEl.current.value;
    alert(text)
  }

  let newPostEl = React.createRef();

  return (
    <div>
      <div>
        <div className={`${s.posts} ${s.item}`}>
          <h5>My posts</h5>
          <button onClick={addPost} className={s.button}>
            New Post
          </button>
          <textarea ref={newPostEl} />
          {props.posts}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;