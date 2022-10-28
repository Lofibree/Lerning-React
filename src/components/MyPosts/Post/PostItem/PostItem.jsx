import React from 'react';
import s from './PostItem.module.css';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const PostItem = (props) => {

    // const editTextAreaEl = React.createRef();

    // const editPost = () => {
    //     props.editPostCont();
    // }

    // const onEditChange = () => {
    //     let text = editTextAreaEl.current.value;
    //     props.onEditChangeCont(text);
    // }

    // const completeEdit = () => {
    //     let text = editTextAreaEl.current.value;
    //     if (text !== '') {
    //         props.completeEditCont();
    //     }
    // }

    // const deletePost = () => {
    //     props.deletePostCont();
    // }

    // const onStylePostChange = () => {
    //     props.onStylePostChange();
    // }

    return (
        <div className={s.item}>
            <div className={s.container}>
                <header className={s.headerPost}>
                    <div className={s.postId}>{props.id}</div>
                    <img src={`https://picsum.photos/seed/${props.id}/526/300`} />
                    <NavLink to={'/profile/' + props.id} className={s.commentsLink}>
                        <div className={s.postAuthor}>{props.title}</div>
                    </NavLink>
                </header>
                <main className={s.mainPost}>
                    <h6 className={s.postText}>{props.body}</h6>
                    {/* <div className={s.time}>{props.time}</div> */}
                    {/* <div className={s.iconBox}>
                        <AiOutlineEdit
                            className={props.styleEditBtn}
                            // onClick={editPost}
                        />
                        <AiOutlineCheck
                            className={props.styleCompleteBtn}
                            // onClick={completeEdit}
                        /> 
                        <AiOutlineDelete
                            className={s.deleteBtn}
                            // onClick={deletePost}
                        />
                    </div> */}
                    {/* <NavLink to={'/profile/' + props.id} className={s.commentsLink}>Comments</NavLink> */}
                    {/* <textarea className={props.styleTextArea}
                        ref={editTextAreaEl}
                        onChange={onEditChange}
                        value={props.value}
                    /> */}
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

export default PostItem;