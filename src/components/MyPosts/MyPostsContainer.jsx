import React from 'react';
import PostContainer from './Post/PostContainer';
import moment from 'moment';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import StoreContext from '../../StoreContext';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let addPostR = () => {
            let timeMesse = moment().format('HH:mm');
            store.dispatch(addPostActionCreator(timeMesse));
          }

          let onPostChange = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text));
          }

          let postsEl = store.getState().profilePage.posts
            .map(p => <PostContainer message={p.message}
              likeCount={p.likeCount}
              time={p.time}
              state={store.getState()}
              index={store.getState().profilePage.posts.indexOf(p)}
            />
            );
            
          return (
            <MyPosts postsEl={postsEl}
              updateNewPostText={onPostChange}
              addPost={addPostR}
              value={store.getState().profilePage.newPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;