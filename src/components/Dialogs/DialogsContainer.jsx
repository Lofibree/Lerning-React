import React from 'react';
import s from './Dialogs.module.css';
import DialogListItem from './DialogListItem/DialogListItem';
import { NavLink } from 'react-router-dom';
import Dialogs from './Dialogs';
import { addDialogActionCreator, onAddDialogChangeActionCreator } from '../../redux/messagesReducer';
import { connect } from 'react-redux/es/exports';



let mapStateToProps = (state) => {
    return {
        dialogsEl: state.messagePage.dialogs
            .map(d => <NavLink to={'/dialogs/' + d.id} className={s.person}>
                <DialogListItem name={d.name} id={d.id} />
            </NavLink>
            ),
        value: state.messagePage.newDialogText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChangeAddDialogCont: (text) => {
            dispatch(onAddDialogChangeActionCreator(text))
        },
        completeNameWriteCont: (text) => {
            dispatch(addDialogActionCreator(text));
        },
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer;