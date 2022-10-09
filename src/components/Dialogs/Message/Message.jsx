import React from 'react';
import s from './../Dialogs.module.css';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai'
import { useState } from 'react';


const Message = (props) => {


    let editTextAreaEl = React.createRef();

    const [styleTextArea, setStyleTextArea] = useState(s.editText)

    // let onTextChange = () => {
    //     let text = editTextAreaEl.current.value;
    //     props.dispatch({ type: 'UPDATE-NEW-EDIT-TEXT', newText: text });
    // }


    let editMess = () => {
        // debugger;
        setStyleTextArea(styleTextArea + ' ' + s.active);
    }

    let completeEdit = () => {
        setStyleTextArea(s.editText);
        let text = editTextAreaEl.current.value;
        props.dispatch({ type: 'COMPLETE-EDIT', newText: text, index: props.index });
    }

    let deleteMess = () => {
        // debugger;
        props.dispatch({ type: 'DELETE-MESS', index: props.index })
    }


    return (
        <div >
            <div className={s.message}>
                {/* <img src='https://sun9-35.userapi.com/impg/o-p1vCiV1WnL_s1R6fIPxBXMCBkB-4qpxwdm8w/w8n0fXiq28I.jpg?size=487x477&quality=96&sign=2c74b09855001bfe78e3bac37db92f6e&type=album' /> */}
                <div className={s.headerMess}>
                    <div className={s.messText}>
                        <div>{props.index}.</div>
                        <div>{props.title}</div>
                    </div>
                    <div className={s.iconBox}>
                        <AiOutlineEdit className={s.editBtn} onClick={editMess} />
                        <AiOutlineCheck onClick={completeEdit} />
                        <AiOutlineDelete className={s.deleteBtn} onClick={deleteMess} />
                    </div>
                </div>
                <textarea className={styleTextArea}
                    ref={editTextAreaEl}
                // onChange={onTextChange}
                // value={props.state.messagePage.messages[props.index].message}
                />
            </div>
        </div>
    );
};


export default Message;