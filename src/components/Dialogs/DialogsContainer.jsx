import React from 'react';
import s from './Dialogs.module.css';
import DialogListItem from './DialogListItem/DialogListItem';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dialogs from './Dialogs';
import { addDialogActionCreator, onAddDialogChangeActionCreator } from '../../redux/messagesReducer';
import { useState } from 'react';




const DialogsContainer = (props) => {

    // debugger;

    const [styleCompleteBtn, setStyleCompleteBtn] = useState(s.completeAddDialogBtn)
    const [styleAddDialog, setStyleAddDialog] = useState(s.newAddDialogText)

    // debugger;

    let addDialogInit = () => {
        // debugger;
        setStyleAddDialog(styleAddDialog + ' ' + s.active);
        setStyleCompleteBtn(styleCompleteBtn + ' ' + s.active)
    }

    let onChangeAddDialog = (text) => {
        // debugger;
        props.store.dispatch(onAddDialogChangeActionCreator(text))
    }

    let completeNameWrite = (text) => {
        props.store.dispatch(addDialogActionCreator(text));
        setStyleAddDialog(s.newAddDialogText);
        setStyleCompleteBtn(s.completeAddDialogBtn);
    }

    let dialogsEl = props.store.getState().messagePage.dialogs
        .map(d => <NavLink to={'/dialogs/' + d.id} className={s.person}>
            <DialogListItem name={d.name} id={d.id} />
        </NavLink>
        );

    return (<Dialogs
        dialogsEl={dialogsEl}
        addDialogInitCont={addDialogInit}
        onChangeAddDialogCont={onChangeAddDialog}
        completeNameWriteCont={completeNameWrite}
        value={props.store.getState().messagePage.newDialogText}
        styleCompleteBtn={styleCompleteBtn}
        styleAddDialog={styleAddDialog}
    />
    );
};

export default DialogsContainer;