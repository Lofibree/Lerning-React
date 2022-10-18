import React from 'react';
import s from './Dialogs.module.css';
import DialogListItem from './DialogListItem/DialogListItem';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dialogs from './Dialogs';
import { addDialogActionCreator, onAddDialogChangeActionCreator } from '../../redux/messagesReducer';
import { useState } from 'react';
import { connect } from 'react-redux/es/exports';



// const [styleCompleteBtn, setStyleCompleteBtn] = useState(s.completeAddDialogBtn)
// const [styleAddDialog, setStyleAddDialog] = useState(s.newAddDialogText)


let mapStateToProps = (state) => {
    return {
        dialogsEl: state.messagePage.dialogs
            .map(d => <NavLink to={'/dialogs/' + d.id} className={s.person}>
                <DialogListItem name={d.name} id={d.id} />
            </NavLink>
            ),
        value: state.messagePage.newDialogText,
        // styleCompleteBtn: styleCompleteBtn,
        // styleAddDialog: styleAddDialog
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        // addDialogInitCont: () => {
        //     setStyleAddDialog(styleAddDialog + ' ' + s.active);
        //     setStyleCompleteBtn(styleCompleteBtn + ' ' + s.active)
        // },
        onChangeAddDialogCont: (text) => {
            dispatch(onAddDialogChangeActionCreator(text))
        },
        completeNameWriteCont: (text) => {
            dispatch(addDialogActionCreator(text));
            // setStyleAddDialog(s.newAddDialogText);
            // setStyleCompleteBtn(s.completeAddDialogBtn);
        },
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer;