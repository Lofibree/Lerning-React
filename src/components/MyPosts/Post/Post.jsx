import React, { useState } from 'react';
import s from './Post.module.css';
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'

const Post = (props) => {

    const [styleItem, setStyleItem] = useState(s.item);
    const [styleText, setStyleText] = useState(s.postText);
    const [styleTextArea, setStyleTextArea] = useState(s.editText);
    const [styleEditBtn, setStyleEditBtn] = useState(s.editBtn);

    let editTextAreaEl = React.createRef();

    let editPost = () => {
        setStyleTextArea(styleTextArea + ' ' + s.active); 
        setStyleEditBtn(styleEditBtn + ' ' + s.active);
        props.dispatch({ type: 'UPDATE-EDIT-POST-INIT', index: props.index })
    }

    let onEditChange = () => {
        let text = editTextAreaEl.current.value;
        props.dispatch({ type: 'UPDATE-EDIT-POST-TEXT', newText: text });
    }

    let completeEdit = () => {
        // debugger;
        setStyleTextArea(s.editText);
        setStyleEditBtn(s.editBtn);
        let text = editTextAreaEl.current.value;
        if (text !== '') {
            props.dispatch({ type: 'COMPLETE-POST-EDIT', index: props.index });
        }
    }

        let deletePost = () => {
            props.dispatch( { type: 'DELETE-POST', index: props.index });
        }

    // debugger;

    return (
        <div className={styleItem}
            onClick={() => {
                setStyleItem(styleItem + ' ' + s.active);
                setStyleText(styleText + ' ' + s.active)
            }
            }
        >
            <div className={s.container}>
                <header className={s.headerPost}>
                    <img src='https://sun9-67.userapi.com/impg/ZpEY_6ZWK2cvJcy22GfXNBcEzhz2XKxkPY6aTg/k2LsIPcvlFE.jpg?size=1280x720&quality=96&sign=0cfb8c7c9659dddfbe3549f3dbaf8f29&type=album' />
                    <div className={s.postAuthor}>First public</div>
                </header>
                <main className={s.mainPost}>
                    <h6 className={styleText}>{props.message}</h6>
                    <div className={s.time}>{props.time}</div>
                    <div className={s.iconBox}>
                        <AiOutlineEdit
                            className={styleEditBtn}
                            onClick={editPost}
                        />
                        <AiOutlineCheck
                            className={s.completeBtn}
                            onClick={completeEdit}
                        /> 
                        <AiOutlineDelete
                            className={s.deleteBtn}
                            onClick={deletePost}
                        />
                    </div>
                    <textarea className={styleTextArea}
                        ref={editTextAreaEl}
                        onChange={onEditChange}
                        value={props.state.profilePage.editPostText}
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