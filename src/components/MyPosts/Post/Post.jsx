import React from 'react';
import s from './Post.module.css';
// import { AiOutlineEdit, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';


const Post = (props) => {

    const onStylePostChange = () => {
        props.onStylePostChange();
    }

    return (
        <div className={props.styleItem} onClick={onStylePostChange} >
            <div className={s.container}>
                <h3 className={s.postId}>Post's id: {props.id}</h3>
                <div><img src={`https://picsum.photos/seed/${props.id}/526/300`} /></div>
                <header className={s.headerPost}>
                    <div className={s.postAuthor}>{props.title}</div>
                </header>
                <main className={s.mainPost}>
                    <h6 className={props.styleText}>{props.body}</h6>
                    <div className={s.iconBox}>
                    </div>
                </main>
                <footer className={s.footer}>
                </footer>
            </div>
        </div>
    );
};

export default Post;