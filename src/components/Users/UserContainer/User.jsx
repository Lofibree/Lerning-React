import React from 'react';
import userPhoto from '../../../accets/images/creative.jpg';
import s from './User.module.css';


const User = (props) => {
    return (
        <div className={s.user}>
            <div style={
                {
                    backgroundImage: `url(
                        ${props.user.photos.large !== null
                            ? props.user.photos.large
                            : `https://picsum.photos/seed/${props.user.userId}/526/300`
                        })`
                }
            }
            className={s.userImgCard}
            >
                {/* <img src={
                    props.user.photos.large !== null
                        ? props.user.photos.large
                        : userPhoto}
                    className={s.userImgCard}
                /> */}
            </div>
            <div className={s.usersId}>
                User's Id: {props.user.userId}
            </div>
            <div className={s.userImgPlusName}>
                <img src={
                    props.user.photos.small !== null
                        ? props.user.photos.small
                        : `https://picsum.photos/seed/${props.user.userId}/200/300`
                }
                    className={s.userImg}
                />
                <div className={s.userName}>
                    {props.user.fullName}
                </div>
            </div>
            {/* <div>{props.userStatus}</div> */}
            <div className={s.lookingForAJob}>
                {
                    props.user.lookingForAJob
                        ? 'Looking for a job'
                        : 'Not looking for a job'
                }
            </div>
        </div>
    );
};




export default User;