import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { render } from '@testing-library/react';
import { AiOutlineSend } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai'
import moment from 'moment';


const Dialogs = (props) => {


    let newMessEl = React.createRef();

    let onMessChange = () => {
        let text = newMessEl.current.value;
        props.dispatch({ type: 'UPDATE-NEW-MESS-TEXT', newText: text })
    }

    let addMess = () => {
        let text = newMessEl.current.value;
        let timeMesse = moment().format('HH:mm');
        if (text !== '') {
            props.dispatch({ type: 'ADD-MESSAGE', timeMess: timeMesse });
        }
    }

    let dialogsEl = props.state.messagePage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messageEl = props.state.messagePage.messages
        .map(m => <Message title={m.message} time={m.time} state={props.state} dispatch={props.dispatch} index={props.state.messagePage.messages.indexOf(m)} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEl[0]}
                <div>
                    {messageEl}
                    <div className={s.newMessBox}>
                        {/* <textarea
                            className={s.newMessText}
                            value={props.state.messagePage.newMessText} />
                        <AiOutlineSend className={s.btnMess} /> */}
                    </div>
                </div>
            </div>
            <div className={s.dialogsItems}>
                {dialogsEl[1]}
                <div>
                    {messageEl}
                    <div className={s.newMessBox}>
                        <textarea
                            className={s.newMessText}
                            ref={newMessEl}
                            onChange={onMessChange}
                            value={props.state.messagePage.newMessText} />
                        <AiOutlineSend onClick={addMess} className={s.btnMess} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;