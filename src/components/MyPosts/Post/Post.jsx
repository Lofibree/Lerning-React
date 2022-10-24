import React from 'react';
import s from './Post.module.css';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Post = (props) => {

    const editTextAreaEl = React.createRef();

    const editPost = () => {
        props.editPostCont();
    }

    const onEditChange = () => {
        let text = editTextAreaEl.current.value;
        props.onEditChangeCont(text);
    }

    const completeEdit = () => {
        let text = editTextAreaEl.current.value;
        if (text !== '') {
            props.completeEditCont();
        }
    }

    const deletePost = () => {
        props.deletePostCont();
    }

    const onStylePostChange = () => {
        props.onStylePostChange();
    }

    return (
        <div className={props.styleItem} onClick={onStylePostChange} >
            <div className={s.container}>
                <header className={s.headerPost}>
                    <div className={s.postId}>{props.id}</div>
                    <img src='https://sun9-67.userapi.com/impg/ZpEY_6ZWK2cvJcy22GfXNBcEzhz2XKxkPY6aTg/k2LsIPcvlFE.jpg?size=1280x720&quality=96&sign=0cfb8c7c9659dddfbe3549f3dbaf8f29&type=album' />
                    <div className={s.postAuthor}>{props.title}</div>
                </header>
                <main className={s.mainPost}>
                    <h6 className={props.styleText}>{props.body}</h6>
                    {/* <div className={s.time}>{props.time}</div> */}
                    <div className={s.iconBox}>
                        <AiOutlineEdit
                            className={props.styleEditBtn}
                            onClick={editPost}
                        />
                        <AiOutlineCheck
                            className={props.styleCompleteBtn}
                            onClick={completeEdit}
                        /> 
                        <AiOutlineDelete
                            className={s.deleteBtn}
                            onClick={deletePost}
                        />
                    </div>
                    <NavLink to={'/profile/' + props.id} className={s.commentsLink}>Comments</NavLink>
                    <textarea className={props.styleTextArea}
                        ref={editTextAreaEl}
                        onChange={onEditChange}
                        value={props.value}
                    />
                </main>
                <footer className={s.footer}>
                    {/* <div className={s.likes}>
                        Likes: {props.likeCount}
                    </div> */}
                </footer>
            </div>
        </div>
    );
};

export default Post;