import React from 'react';
import s from './Post.module.css';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';


const Post = (props) => {

    let editTextAreaEl = React.createRef();

    let editPost = () => {
        props.editPostCont();
    }

    let onEditChange = () => {
        let text = editTextAreaEl.current.value;
        props.onEditChangeCont(text);
    }

    let completeEdit = () => {
        let text = editTextAreaEl.current.value;
        if (text !== '') {
            props.completeEditCont();
        }
    }

    let deletePost = () => {
        props.deletePostCont();
    }

    let onStylePostChange = () => {
        props.onStylePostChange();
    }

    return (
        <div className={props.styleItem}
            onClick={onStylePostChange}
        >
            <div className={s.container}>
                <header className={s.headerPost}>
                    <img src='https://sun9-67.userapi.com/impg/ZpEY_6ZWK2cvJcy22GfXNBcEzhz2XKxkPY6aTg/k2LsIPcvlFE.jpg?size=1280x720&quality=96&sign=0cfb8c7c9659dddfbe3549f3dbaf8f29&type=album' />
                    <div className={s.postAuthor}>First public</div>
                </header>
                <main className={s.mainPost}>
                    <h6 className={props.styleText}>{props.message}</h6>
                    <div className={s.time}>{props.time}</div>
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
                    <textarea className={props.styleTextArea}
                        ref={editTextAreaEl}
                        onChange={onEditChange}
                        value={props.value}
                    />
                </main>
                <footer className={s.footer}>
                    <div className={s.likes}>
                        Likes: {props.likeCount}
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Post;