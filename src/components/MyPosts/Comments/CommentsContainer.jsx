import React from 'react';
import { postsAPI } from '../../api/api.js';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setCommentsAC } from '../../../redux/profileReducer'
import Comments from './Comments';
import Comment from './Comment';
import { setIsFetchingCommAC } from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';


class CommentsAJAX extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setIsFetching(true);
        postsAPI.setComments(this.props.id)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setComments(data)
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
                    />
                }
            </>
        )
    }
}



const CommentsContainer = (props) => {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.profilePage.comments)
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

    return (
        <CommentsAJAX
            id={props.id}
            commentsEl={commentsEl}
            isFetchingComm={isFetchingComm}
            setComments={setComments}
            setIsFetching={setIsFetching}
        />
    );
};

export default CommentsContainer;