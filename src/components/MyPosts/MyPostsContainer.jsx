import React from 'react';
import PostItem from './Post/PostItem/PostItem';
import MyPosts from './MyPosts';
import {
  // addPost, updateNewPostText, 
  setPosts, setCurrentPage, setIsFetching
} from '../../redux/profileReducer';
import { connect } from 'react-redux/es/exports';
import { postsAPI } from '../api/api';
import Preloader from '../common/Preloader/Preloader';


class MyPoststAJAX extends React.Component {
  constructor(props) { super(props); }

  componentDidMount() {
    this.props.setIsFetching(true);
    postsAPI.setPosts(this.props.currentPage)
      .then(data => {
        // debugger;
        this.props.setIsFetching(false);
        this.props.setPosts(data);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching(true);
    postsAPI.setOnPagePosts(pageNumber)
      .then(data => {
        // debugger;
        this.props.setIsFetching(false);
        this.props.setCurrentPage(pageNumber);
        this.props.setPosts(data);
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching
          ? <Preloader />
          : <MyPosts
            addPost={this.props.addPost}
            updateNewPostText={this.props.updateNewPostText}
            onPageChanged={this.onPageChanged}
            value={this.props.value}
            postsEl={this.props.postsEl}
            currentPage={this.props.currentPage}
          />
        }

      </>
    )
  }
}




let mapStateToProps = (state) => {
  return {
    postsEl: state.profilePage.posts
      .map(p => <PostItem
        id={p.id}
        body={p.body}
        title={p.title}
        index={state.profilePage.posts.indexOf(p)}
      />
      ),
    value: state.profilePage.newPostText,
    currentPage: state.profilePage.currentPage,
    isFetching: state.profilePage.isFetching
  }
}

const MyPostsContainer = connect(mapStateToProps,
  { setPosts, setCurrentPage, setIsFetching })(MyPoststAJAX);


export default MyPostsContainer;