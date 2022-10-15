import React, { useState } from 'react';
import s from './Post.module.css';
import { editPostActionCreator, onEditChangePostActionCreator, 
    completeEditPostActionCreator, deletePostActionCreator } from '../../../redux/profileReducer';
import Post from './Post';


const PostContainer = (props) => {

    const [styleItem, setStyleItem] = useState(s.item);
    const [styleText, setStyleText] = useState(s.postText);
    const [styleTextArea, setStyleTextArea] = useState(s.editText);
    const [styleEditBtn, setStyleEditBtn] = useState(s.editBtn);
    const [styleCompleteBtn, setStyleCompleteBtn] = useState(s.completeBtn);

    let editPost = () => {
        setStyleTextArea(styleTextArea + ' ' + s.active); 
        setStyleEditBtn(styleEditBtn + ' ' + s.active);
        setStyleCompleteBtn(styleCompleteBtn + ' ' + s.active);
        props.store.dispatch(editPostActionCreator(props.index))
    }

    let onEditChange = (text) => {
        props.store.dispatch(onEditChangePostActionCreator(text, props.index));
    }

    let completeEdit = () => {
        setStyleTextArea(s.editText);
        setStyleEditBtn(s.editBtn);
        setStyleCompleteBtn(s.completeBtn);
        props.store.dispatch(completeEditPostActionCreator(props.index));
    }

    let deletePost = () => {
        props.store.dispatch(deletePostActionCreator(props.index));
    }

    let onStylePostChange = () => {
        setStyleItem(styleItem + ' ' + s.active);
        setStyleText(styleText + ' ' + s.active);
    }


    return (<Post editPostCont={editPost}
        onEditChangeCont={onEditChange}
        completeEditCont={completeEdit}
        deletePostCont={deletePost}
        onStylePostChange={onStylePostChange}
        value={props.store.getState().profilePage.posts[props.index].editPostText}
        message={props.message}
        likeCount={props.likeCount}
        time={props.time}
        styleItem={styleItem}
        styleText={styleText}
        styleTextArea={styleTextArea}
        styleEditBtn={styleEditBtn}
        styleCompleteBtn={styleCompleteBtn}
    />
    );
};

export default PostContainer;