import React, { useState } from 'react';
import s from './Dialogs.module.css';
import { AiOutlineUserAdd, AiOutlineCheck } from 'react-icons/ai'
import {Navigate} from 'react-router-dom';




const Dialogs = (props) => {

    const [styleCompleteBtn, setStyleCompleteBtn] = useState(s.completeAddDialogBtn)
    const [styleAddDialog, setStyleAddDialog] = useState(s.newAddDialogText)

    let nameNewDialogEl = React.createRef();

    let addDialogInit = () => {
        setStyleAddDialog(styleAddDialog + ' ' + s.active);
        setStyleCompleteBtn(styleCompleteBtn + ' ' + s.active)
    }

    let onChangeAddDialog = () => {
        let text = nameNewDialogEl.current.value;
        props.onChangeAddDialogCont(text)
    }

    let completeNameWrite = () => {
        let text = nameNewDialogEl.current.value;
        if (text !== '') {
            props.completeNameWriteCont();
        }
        setStyleAddDialog(s.newAddDialogText);
        setStyleCompleteBtn(s.completeAddDialogBtn);
    }

    return (
        <div className={s.dialogs}>
            {props.dialogsEl}
            <div>
                <div className={s.newMessBox}>
                    <AiOutlineUserAdd className={s.addDialogBtn} onClick={addDialogInit} />
                    <textarea ref={nameNewDialogEl} className={styleAddDialog} value={props.value} onChange={onChangeAddDialog} />
                    <AiOutlineCheck
                        className={styleCompleteBtn}
                        onClick={completeNameWrite}
                    />
                </div>
            </div>

        </div>
    );
};

export default Dialogs;