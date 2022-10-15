import React from 'react';
import s from './Dialogs.module.css';
import { AiOutlineUserAdd, AiOutlineCheck } from 'react-icons/ai'




const Dialogs = (props) => {

    let nameNewDialogEl = React.createRef();

    let addDialogInit = () => {
        // debugger;
        props.addDialogInitCont();
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
    }

    return (
        <div className={s.dialogs}>
            {props.dialogsEl}
            <div>
                <div className={s.newMessBox}>
                    <AiOutlineUserAdd className={s.addDialogBtn} onClick={addDialogInit} />
                    <textarea ref={nameNewDialogEl} className={props.styleAddDialog} value={props.value} onChange={onChangeAddDialog}/>
                    <AiOutlineCheck
                        className={props.styleCompleteBtn} 
                        onClick={completeNameWrite}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Dialogs;