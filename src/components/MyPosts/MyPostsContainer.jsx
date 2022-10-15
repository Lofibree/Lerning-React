import React from 'react';
import PostContainer from './Post/PostContainer';
import moment from 'moment';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';

const MyPostsContainer = (props) => {

  let addPostR = () => {
    let timeMesse = moment().format('HH:mm');
    props.store.dispatch(addPostActionCreator(timeMesse));
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  let postsEl = props.store.getState().profilePage.posts
    .map(p => <PostContainer message={p.message}
      likeCount={p.likeCount}
      time={p.time}
      state={props.store.getState()}
      store={props.store}
      index={props.store.getState().profilePage.posts.indexOf(p)}
    />
    );


  return (<MyPosts postsEl={postsEl} 
    updateNewPostText={onPostChange}
    addPost={addPostR} 
    value={props.store.getState().profilePage.newPostText}
    />
    );
};

export default MyPostsContainer;