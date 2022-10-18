import React from 'react';
import PostContainer from './Post/PostContainer';
import moment from 'moment';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import { connect } from 'react-redux/es/exports';



let mapStateToProps = (state) => {
  return {
    postsEl: state.profilePage.posts
      .map(p => <PostContainer 
        message={p.message}
        likeCount={p.likeCount}
        time={p.time}
        index={state.profilePage.posts.indexOf(p)}
      />
      ),
      value: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text)); 
    },
    addPost: () => {
      let timeMesse = moment().format('HH:mm');
      dispatch(addPostActionCreator(timeMesse));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;