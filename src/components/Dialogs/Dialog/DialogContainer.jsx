import React from 'react';
import s from './../Dialogs.module.css';
import { useParams } from 'react-router-dom';
import { onMessChangeActionCreator, addMessActionCreator } from '../../../redux/messagesReducer';
import MessageContainer from '../Message/MessageContainer';
import Dialog from './Dialog';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';


const DialogContainer = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const index = useSelector(state => state.messagePage.messagesBank);
    let dialog = useSelector(state => state.messagePage.dialogs[id].name);
    let messagesBankUse = useSelector(state => state.messagePage.messagesBank);
    // debugger;

    let getDialogName = () => {
        let messagesOfDialog = messagesBankUse.filter(m => m.ownerDialog == dialog);
        return messagesOfDialog;
    }

    let onMessChange = (text) => {
        dispatch(onMessChangeActionCreator(text))
    }

    let addMess = (timeMesse) => {
        // debugger;
        dispatch(addMessActionCreator(timeMesse, id));
    }
    // debugger;

    let messageEl = getDialogName().map(m => <MessageContainer
            title={m.message}
            time={m.time}
            index={index.indexOf(m)}
        />
        );

    return (<Dialog
        name={state.messagePage.dialogs[id].name}
        onMessChangeCont={onMessChange}
        addMessCont={addMess}
        value={state.messagePage.newMessText}
        messageEl={messageEl}
    />
    );
};

export default DialogContainer;