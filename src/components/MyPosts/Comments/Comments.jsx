import React from 'react';
import s from './Comments.module.css';


const Comments = (props) => {
    return (
        <div>
            <h3 className={s.postId}>Post's id: {props.id}</h3>
            {/* <div>Author: {props.postAuthor}</div> */}
            {props.commentsEl}
        </div>
    );
};

export default Comments;