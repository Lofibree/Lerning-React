import React from 'react';
import s from './Message.module.css';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai'
import { useState } from 'react';
import { editMessActionCreator, onEditChangeMessActionCreator, 
    completeEditMessActionCreator, deleteMessActionCreator } from '../../../redux/messagesReducer';
import Message from './Message'


const MessageContainer = (props) => {

    // debugger;

    const [styleTextArea, setStyleTextArea] = useState(s.editText);
    const [styleEditBtn, setStyleEditBtn] = useState(s.editBtn);
    const [styleCompleteBtn, setStyleCompleteBtn] = useState(s.completeBtn);


    let editMess = () => {
        setStyleTextArea(styleTextArea + ' ' + s.active);
        setStyleEditBtn(styleEditBtn + ' ' + s.active);
        setStyleCompleteBtn(styleCompleteBtn + ' ' + s.active);
        // debugger;
        props.store.dispatch(editMessActionCreator(props.index));
    }

    let onEditChange = (text) => {
        // debugger;
        props.store.dispatch(onEditChangeMessActionCreator(text, props.index))
    }

    let completeEdit = () => {
        setStyleTextArea(s.editText);
        setStyleEditBtn(s.editBtn);
        setStyleCompleteBtn(s.completeBtn);
        props.store.dispatch(completeEditMessActionCreator(props.index));
    }

    let deleteMess = () => {
        // debugger;
        props.store.dispatch(deleteMessActionCreator(props.index))
    }


    return (<Message 
        editMessCont={editMess}
        onEditChangeCont={onEditChange}
        completeEditCont={completeEdit}
        deleteMessCont={deleteMess}
        title={props.title}
        time={props.time}
        index={props.index}
        value={props.store.getState().messagePage.messagesBank[props.index].editMessText}
        styleTextArea={styleTextArea}
        styleEditBtn={styleEditBtn}
        styleCompleteBtn={styleCompleteBtn}
    />
    );
};


export default MessageContainer;