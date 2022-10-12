import React from 'react';
import s from './../Dialogs.module.css';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai'
import { useState } from 'react';
import moment from 'moment';
import { useEffect } from 'react';


const Message = (props) => {


    let editTextAreaEl = React.createRef();

    const [styleTextArea, setStyleTextArea] = useState(s.editText);
    const [styleEditBtn, setStyleEditBtn] = useState(s.editBtn);


    let editMess = () => {
        // debugger;
        setStyleTextArea(styleTextArea + ' ' + s.active);
        setStyleEditBtn(styleEditBtn + ' ' + s.active);
        props.dispatch({ type: 'UPDATE-EDIT-MESS-INIT', index: props.index })
    }

    let onEditChange = () => {
        let text = editTextAreaEl.current.value;
        props.dispatch({ type: 'UPDATE-EDIT-MESS-TEXT', newText: text })
    }

    let completeEdit = () => {
        setStyleTextArea(s.editText);
        setStyleEditBtn(s.editBtn);
        let text = editTextAreaEl.current.value;
        if (text !== '') {
            props.dispatch({ type: 'COMPLETE-MESS-EDIT', index: props.index });
        }
    }

    let deleteMess = () => {
        // debugger;
        props.dispatch({ type: 'DELETE-MESS', index: props.index })
    }


    // let getDateMess = () => {
    //     // debugger;
    //     let dateMesse = moment().format('HH:mm');
    //     props.dispatch({ type: 'GET-DATE', dateMess: dateMesse })
    // }


    // useEffect(() => {
    //     let dateMesse = moment().format('HH:mm');
    //     props.dispatch({ type: 'GET-DATE', dateMess: dateMesse })
    // })


    return (
        <div >
            <div className={s.message}>
                {/* <img src='https://sun9-35.userapi.com/impg/o-p1vCiV1WnL_s1R6fIPxBXMCBkB-4qpxwdm8w/w8n0fXiq28I.jpg?size=487x477&quality=96&sign=2c74b09855001bfe78e3bac37db92f6e&type=album' /> */}
                <div className={s.headerMess}>
                    <div className={s.messText}>
                        <div>{props.index}.</div>
                        <div>{props.title}</div>
                        <div className={s.date}>{props.time}</div>
                    </div>
                    <div className={s.iconBox}>
                        <AiOutlineEdit className={styleEditBtn} onClick={editMess} />
                        <AiOutlineCheck className={s.completeBtn} onClick={completeEdit} />
                        <AiOutlineDelete className={s.deleteBtn} onClick={deleteMess} />
                    </div>
                </div>
                <textarea className={styleTextArea}
                    ref={editTextAreaEl}
                    onChange={onEditChange}
                    value={props.state.messagePage.editMessText}
                />
            </div>
        </div>
    );
};


export default Message;