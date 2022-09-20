import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div>
            <div className={s.dialog}>{props.title}</div>
        </div>
    );
};


const Dialogs = () => {

    let dialogsData = [
        { id: 0, name: 'Sergey' },
        { id: 1, name: 'lofi' },
        { id: 2, name: 'seva' },
        { id: 3, name: 'rock' },
        { id: 4, name: 'dggnjsdx' }
    ]

    let messagesData = [
        { id: 0, message: 'hi' },
        { id: 1, message: 'how are you' },
        { id: 2, message: 'fuck you' },
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name='lofi' id='2' />
                <DialogItem name='seva' id='3' />
                <DialogItem name='rock' id='4' />
            </div>
            <div className={s.messages}>
                <div>
                    <Message title={messagesData[0].message} />
                    <Message title={messagesData[1].message} />
                    <Message title={messagesData[2].message} />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;