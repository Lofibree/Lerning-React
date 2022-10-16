import React from 'react';
import s from './../Dialogs.module.css';
import { useParams } from 'react-router-dom';
import { onMessChangeActionCreator, addMessActionCreator } from '../../../redux/messagesReducer';
import MessageContainer from '../Message/MessageContainer';
import Dialog from './Dialog';
import StoreContext from '../../../StoreContext';

const DialogContainer = (props) => {
    // console.log(useParams());
    const { id } = useParams();

    // debugger;



    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let getDialogName = () => {
                        // let emptyArr = [];
                        let dialog = store.getState().messagePage.dialogs[id].name;
                        let messagesOfDialog = store.getState().messagePage.messagesBank.filter(m => m.ownerDialog == dialog);
                        // debugger;

                        return messagesOfDialog;
                    }

                    let onMessChange = (text) => {
                        store.dispatch(onMessChangeActionCreator(text))
                    }

                    let addMess = (timeMesse) => {
                        // debugger;
                        store.dispatch(addMessActionCreator(timeMesse, id));
                    }

                    // debugger;

                    let messageEl = getDialogName().map(m => <MessageContainer
                        title={m.message}
                        time={m.time}
                        index={store.getState().messagePage.messagesBank.indexOf(m)}
                    />
                    );

                    return (
                        <Dialog
                            name={store.getState().messagePage.dialogs[id].name}
                            onMessChangeCont={onMessChange}
                            addMessCont={addMess}
                            value={store.getState().messagePage.newMessText}
                            messageEl={messageEl}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogContainer;