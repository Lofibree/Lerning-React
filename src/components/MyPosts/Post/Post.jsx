import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.postName}>{props.message}</div>
            <img src='https://sun9-67.userapi.com/impg/ZpEY_6ZWK2cvJcy22GfXNBcEzhz2XKxkPY6aTg/k2LsIPcvlFE.jpg?size=1280x720&quality=96&sign=0cfb8c7c9659dddfbe3549f3dbaf8f29&type=album' />
            <div>
                Likes: {props.likeCount}
            </div>
        </div>
    );
};

export default Post;