import React from 'react';
import PostItem from './Post/PostItem/PostItem';
import MyPosts from './MyPosts';
import { getPostsThunkCreator, getOnPagePostsThunkCreator } from '../../redux/profileReducer';
import { connect } from 'react-redux/es/exports';
import Preloader from '../common/Preloader/Preloader';


class MyPoststAJAX extends React.Component {

  componentDidMount() {
    this.props.getPostsThunkCreator(this.props.currentPage)
  }

  onPageChanged = (pageNumber) => {
    this.props.getOnPagePostsThunkCreator(pageNumber);
  }

  render() {
    return (
      <>
        {this.props.isFetching
          ? <Preloader />
          : <MyPosts
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


export default connect(mapStateToProps,
  { getPostsThunkCreator, getOnPagePostsThunkCreator })(MyPoststAJAX);