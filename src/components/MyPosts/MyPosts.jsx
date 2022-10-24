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

  let pagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <div>
      <div className={s.posts}>
        <div className={s.myPosts}>My posts</div>
        <div className={s.pagesNumberBox}>
          {
            pagesArr.map(pA => {
              return (
                <span onClick={() => { props.onPageChanged(pA) }}
                  className={props.currentPage === pA ? s.activePage : undefined}
                >
                  {pA}
                </span>
              )
            })
          }
        </div>
        <div className={s.newPostBox}>
          <textarea
            className={s.newPostText}
            onChange={onPostChange}
            ref={newPostEl}
            value={props.value}
          />
          <AiOutlineSend onClick={onAddPost} className={s.btnMess} />
        </div>
        {props.postsEl}
      </div>
    </div>
  );
};

export default MyPosts;