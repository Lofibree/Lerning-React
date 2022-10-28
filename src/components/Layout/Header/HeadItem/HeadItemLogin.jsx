import React from 'react';
import s from './HeadItem.module.css';

const HeadItem = (props) => {
    return (
        <div className={s.itemLogin}>
            <div>
                {props.title}
            </div>
            <div>
                {props.login}
            </div>
            <div>
                {props.email}
            </div>
            <div>
                {props.id}
            </div>
        </div>
    );
};

export default HeadItem;