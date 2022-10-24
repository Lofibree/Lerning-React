import React, { useState } from 'react';
import s from './Post.module.css';
import { editPostActionCreator, onEditChangePostActionCreator, 
    completeEditPostActionCreator, deletePostAC } from '../../../redux/profileReducer';
import Post from './Post';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios';




// class PostAJAX extends React.Component {
//     constructor(props) {super(props)}


// }






const PostContainer = (props) => {

    const [styleItem, setStyleItem] = useState(s.item);
    const [styleText, setStyleText] = useState(s.postText);
    const [styleTextArea, setStyleTextArea] = useState(s.editText);
    const [styleEditBtn, setStyleEditBtn] = useState(s.editBtn);
    const [styleCompleteBtn, setStyleCompleteBtn] = useState(s.completeBtn);

    const dispatch = useDispatch();
    const editPostText = useSelector(state => state.profilePage.posts[props.index].editPostText)
    // const comments = useSelector(state => state.profilePage.posts.)

    let editPost = () => {
        setStyleTextArea(styleTextArea + ' ' + s.active); 
        setStyleEditBtn(styleEditBtn + ' ' + s.active);
        setStyleCompleteBtn(styleCompleteBtn + ' ' + s.active);
        dispatch(editPostActionCreator(props.index))
    }

    let onEditChange = (text) => {
        dispatch(onEditChangePostActionCreator(text, props.index));
    }

    let completeEdit = () => {
        setStyleTextArea(s.editText);
        setStyleEditBtn(s.editBtn);
        setStyleCompleteBtn(s.completeBtn);
        dispatch(completeEditPostActionCreator(props.index));
    }

    let deletePost = () => {
        dispatch(deletePostAC(props.id));
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
        value={editPostText}
        body={props.body}
        title={props.title}
        id={props.id}
        // likeCount={props.likeCount}
        // time={props.time}
        styleItem={styleItem}
        styleText={styleText}
        styleTextArea={styleTextArea}
        styleEditBtn={styleEditBtn}
        styleCompleteBtn={styleCompleteBtn}
    />
    );
};

export default PostContainer;