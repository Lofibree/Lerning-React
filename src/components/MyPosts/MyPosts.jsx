import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // let newPostEl = React.createRef();

  // let addPostR = () => {
  //   let text = newPostEl.current.value;
  //   // alert(text)
  //   // debugger
  //   props.addPost(text);
  // }
  // debugger;
  let postsEl = props.postList.profilePage.posts
  .map(p => <Post message={p.message} likeCount={p.likeCount} />);

  // debugger

  return (
    <div>
      <div>
        <div className={`${s.posts} ${s.item}`}>
          <h5>My posts</h5>
          {/* <button onClick={addPostR} className={s.button}>
            New Post
          </button>
          <textarea ref={newPostEl} /> */}
          {postsEl}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;