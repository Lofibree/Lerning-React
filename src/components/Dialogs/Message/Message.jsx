import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div >
            <div className={s.message}>
                {/* <img src='https://sun9-35.userapi.com/impg/o-p1vCiV1WnL_s1R6fIPxBXMCBkB-4qpxwdm8w/w8n0fXiq28I.jpg?size=487x477&quality=96&sign=2c74b09855001bfe78e3bac37db92f6e&type=album' /> */}
                {props.title}
            </div>
        </div>
    );
};


export default Message;