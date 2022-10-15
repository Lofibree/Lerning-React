import React from 'react';
import s from './Dialog.module.css';
import moment from 'moment';
import { AiOutlineSend } from 'react-icons/ai';

const Dialog = (props) => {

    let newMessEl = React.createRef();

    let onMessChange = () => {
        let text = newMessEl.current.value;
        props.onMessChangeCont(text);
    }

    let addMess = () => {
        let text = newMessEl.current.value;
        let timeMesse = moment().format('HH:mm');
        if (text !== '') {
            props.addMessCont(timeMesse);
        }
    }

    return (
        <div>
            <header className={s.dialog}>
                <img src='https://sun9-35.userapi.com/impg/o-p1vCiV1WnL_s1R6fIPxBXMCBkB-4qpxwdm8w/w8n0fXiq28I.jpg?size=487x477&quality=96&sign=2c74b09855001bfe78e3bac37db92f6e&type=album' />
                {props.name}

            </header>
            <main>
                {props.messageEl}
            </main>
            <div className={s.dialogsItems}>
                <div>
                    <div className={s.newMessBox}>
                        <textarea
                            className={s.newMessText}
                            ref={newMessEl}
                            onChange={onMessChange}
                            value={props.value} />
                        <AiOutlineSend onClick={addMess} className={s.btnMess} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;