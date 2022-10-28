import React, { useState } from 'react';
import s from './Post.module.css';
import { setPostImgAC, setParticularPostAC, setIsFetchingPostAC } from '../../../redux/profileReducer';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import PostContainer from './PostContainer';
import CommentsContainer from '../Comments/CommentsContainer';
import { useParams } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import { postsAPI } from '../../api/api';




class PostPageAJAX extends React.Component {
    constructor(props) { super(props) }

    componentDidMount() {
        this.props.setIsFetchingPost(true);
        postsAPI.setParticularPost(this.props.id)
            .then(data => {
                this.props.setIsFetchingPost(false);
                this.props.setParticularPost(data)
            })
    }
    render() {
        return (
            <>
                {
                    this.props.isFetchingPost
                        ? <Preloader />
                        :
                        <>
                            <PostContainer
                                onStylePostChange={this.props.onStylePostChange}
                                setPostImg={this.props.setPostImg}
                                title={this.props.title}
                                body={this.props.body}
                                id={this.props.id}
                                styleItem={this.props.styleItem}
                                styleText={this.props.styleText}
                                postImg={this.props.postImg}
                            />
                            <CommentsContainer
                                id={this.props.id}
                            />
                        </>
                }
            </>
        )
    }
}



const PostPageContainer = (props) => {

    const {id} = useParams();

    const dispatch = useDispatch();
    const [styleItem, setStyleItem] = useState(s.item);
    const [styleText, setStyleText] = useState(s.postText);

    const postImg = useSelector(state => state.profilePage.postImg)
    const title = useSelector(state => state.profilePage.partPost.title)
    const body = useSelector(state => state.profilePage.partPost.body)
    const isFetchingPost = useSelector(state => state.profilePage.isFetchingPost)

    const setPostImg = (postImg) => {
        dispatch(setPostImgAC(postImg))
    }
    const setParticularPost = (post) => {
        dispatch(setParticularPostAC(post))
    }
    const onStylePostChange = () => {
        setStyleItem(styleItem + ' ' + s.active);
        setStyleText(styleText + ' ' + s.active);
    }
    const setIsFetchingPost = (isFetchingPost) => {
        dispatch(setIsFetchingPostAC(isFetchingPost))
    }
 

    return (
      <PostPageAJAX 
      setPostImg={setPostImg}
      onStylePostChange={onStylePostChange}
      setParticularPost={setParticularPost}
      setIsFetchingPost={setIsFetchingPost}
      styleItem={styleItem}
      styleText={styleText}
      postImg={postImg}
      id={id}
      title={title}
      body={body}
      isFetchingPost={isFetchingPost}
      />
    );
};

export default PostPageContainer;