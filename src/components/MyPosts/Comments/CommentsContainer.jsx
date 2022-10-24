import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setCommentsAC } from './../../../redux/profileReducer'
import Comments from './Comments';
import Comment from './Comment';
import { setIsFetchingCommAC } from './../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';


class CommentsAJAX extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setComments(response.data)
                // debugger;
            })
    }

    render() {
        return (
            <>
                {this.props.isFetchingComm
                    ? <Preloader />
                    : <Comments
                        commentsEl={this.props.commentsEl}
                        id={this.props.id}
                    // postAuthor={this.props.postAuthor}
                    />
                }
            </>
        )
    }
}



const CommentsContainer = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const comments = useSelector(state => state.profilePage.comments)
    // const posts = useSelector(state => state.profilePage.posts);
    // const post = posts.find(post => post.id === id);
    // const postAuthor = post.name;
    const isFetchingComm = useSelector(state => state.profilePage.isFetchingComm)

    const setComments = (newComments) => {
        dispatch(setCommentsAC(newComments))
    }
    const setIsFetching = (isFetchingComm) => {
        dispatch(setIsFetchingCommAC(isFetchingComm))
    }

    const commentsEl = comments.map(c =>
        <Comment
            name={c.name}
            email={c.email}
            body={c.body}
        />
    )



    // debugger;
    return (
        <CommentsAJAX
            id={id}
            commentsEl={commentsEl}
            isFetchingComm={isFetchingComm}
            setComments={setComments}
            setIsFetching={setIsFetching}
        />
    );
};

export default CommentsContainer;