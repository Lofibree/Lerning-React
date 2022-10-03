import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { render } from '@testing-library/react';

const Dialogs = (props) => {

    let dialogsEl = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messageEl = props.state.messages
        .map(m => <Message title={m.message} />);

    let newMessText = React.createRef();
    let newMessDiv = React.createRef();

    let addNewMess = () => {
        // debugger
        let text = newMessText.current.value;
        // newMessDiv.current.value = text;
        console.log(newMessDiv.current)
        console.log(text)
        // newMessText.current.value = 'sfgsd';
        newMessDiv.current.value = text;

    }

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
            <button onClick={addNewMess}>New Message</button>
            <textarea ref={newMessText} />
            <input ref={newMessDiv}></input>
        </div>
    );
};

export default Dialogs;