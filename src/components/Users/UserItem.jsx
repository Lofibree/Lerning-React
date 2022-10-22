import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import userPhoto from '../../accets/images/creative.jpg';

const UserItem = (props) => {


    const onClickFollowUnFollow = () => {
        props.onClickFollowUnFollowCont(props.id)
        // debugger;
    }

    // const setParticularImg = () => {
    //     props.setParticularImgCont(props.id)
    // }

    return (
        <div className={s.item}>
            <div className={s.imgPlusFollow}>
                <img
                    src={props.photo !== null
                        ? props.photo
                        : userPhoto
                    }
                />
                <div>
                    <button onClick={onClickFollowUnFollow}>
                        {props.isFollowed}
                    </button>
                </div>
            </div>
            <div className={s.innerItem}>
                <div className={s.namePlusLocation}>
                    <div className={s.name}>
                        <NavLink to={'/users/' + props.id}>{props.name}</NavLink>
                    </div>
                    <div className={s.location}>
                        <div>{'props.location.city'},</div>
                        <div>{'props.location.country'}</div>
                    </div>
                </div>
                <div className={s.status}>
                    {props.status}
                </div>
            </div>
        </div>
    );
};

export default UserItem;