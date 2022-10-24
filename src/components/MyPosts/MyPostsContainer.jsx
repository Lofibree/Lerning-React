import React from 'react';
import PostContainer from './Post/PostContainer';
import moment from 'moment';
import MyPosts from './MyPosts';
import { addPost, setPosts, updateNewPostText, setCurrentPage, setIsFetching } from '../../redux/profileReducer';
import { connect } from 'react-redux/es/exports';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';


class MyPoststAJAX extends React.Component {
  constructor(props) {super(props);}

  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${this.props.currentPage}`)
    .then(response => {
      // debugger;
      this.props.setIsFetching(false);
      this.props.setPosts(response.data);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`)
    .then(response => {
      // debugger;
      this.props.setIsFetching(false);
      this.props.setCurrentPage(pageNumber);
      this.props.setPosts(response.data);
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
      .map(p => <PostContainer
        id={p.id} 
        body={p.body}
        title={p.title}
        // likeCount={p.likeCount}
        // time={p.time}
        index={state.profilePage.posts.indexOf(p)}
      />
      ),
      value: state.profilePage.newPostText,
      currentPage: state.profilePage.currentPage,
      isFetching: state.profilePage.isFetching
  }
}

const MyPostsContainer = connect(mapStateToProps,
  { updateNewPostText, addPost, setPosts, setCurrentPage, setIsFetching })(MyPoststAJAX);


export default MyPostsContainer;