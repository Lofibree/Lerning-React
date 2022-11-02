import React from 'react';
import { useState } from 'react';
import PhotoPopup from './PhotoPopup';
// import s from './PhotoPopupOnClick.module.css';

const PhotoPopupOnClick = (props) => {
    // debugger;
    const [popupActive, setPopupActive] = useState(false)

    return (
        <div>
            <div  onClick={() => setPopupActive(true)}>
                {props.children}
            </div>
            <PhotoPopup
                popupActive={popupActive}
                setPopupActive={setPopupActive}
                src={props.children.props.src}
                // userId={props.userId}
                id={props.id}
                {...props}
            /> 
        </div>
    )

}


export default PhotoPopupOnClick;