import React, { useState } from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';

const DialogItem = (props) => {
    // const [style, setStyle] = useState(s.dialog);

    console.log(moment().format('HH:mm'))

    return (
        <div className={s.dialog}>
            <img src='https://sun9-35.userapi.com/impg/o-p1vCiV1WnL_s1R6fIPxBXMCBkB-4qpxwdm8w/w8n0fXiq28I.jpg?size=487x477&quality=96&sign=2c74b09855001bfe78e3bac37db92f6e&type=album'/>
            <NavLink to={'/dialogs/' + props.id} className={s.person}>
                {props.name}</NavLink>
        </div>
    )
}

export default DialogItem;