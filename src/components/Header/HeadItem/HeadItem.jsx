import React from 'react';
import s from './HeadItem.module.css';

const HeadItem = (props) => {
    return (
        <div className={s.item}>
            {props.title}
        </div>
    );
};

export default HeadItem;