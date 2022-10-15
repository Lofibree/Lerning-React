import React from 'react';
import s from './../Dialogs.module.css';
import { useParams } from 'react-router-dom';
import { onMessChangeActionCreator, addMessActionCreator } from '../../../redux/messagesReducer';
import MessageContainer from '../Message/MessageContainer';
import Dialog from './Dialog';

const DialogContainer = (props) => {
    // console.log(useParams());
    const { id } = useParams();

    // debugger;

    let getDialogName = () => {
        // let emptyArr = [];
        let dialog = props.store.getState().messagePage.dialogs[id].name;
        let messagesOfDialog = props.store.getState().messagePage.messagesBank.filter(m => m.ownerDialog == dialog);
        // debugger;

        return messagesOfDialog;
    }

    let onMessChange = (text) => {
        props.store.dispatch(onMessChangeActionCreator(text))
    }

    let addMess = (timeMesse) => {
        // debugger;
        props.store.dispatch(addMessActionCreator(timeMesse, id));
    }

    // debugger;

    let messageEl = getDialogName().map(m => <MessageContainer
            title={m.message}
            time={m.time}
            store={props.store}
            index={props.store.getState().messagePage.messagesBank.indexOf(m)}
        />
        );

    return (<Dialog
        name={props.store.getState().messagePage.dialogs[id].name}
        onMessChangeCont={onMessChange}
        addMessCont={addMess}
        value={props.store.getState().messagePage.newMessText}
        messageEl={messageEl}
    />
    );
};

export default DialogContainer;