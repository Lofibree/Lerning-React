import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsEl = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messageEl = props.state.messages
        .map(m => <Message title={m.message} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEl[0]}
            </div>
            <div>

                {messageEl}

            </div>
            <div>

                {messageEl}

            </div>
            <div className={s.dialogsItems}>
                {dialogsEl[1]}
            </div>
        </div>
    );
};

export default Dialogs;