import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <div>
            <button className={s.button}>
                {props.title}
            </button>
        </div>
    );
};

export default NewPost;