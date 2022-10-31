import React from 'react';
import ProfileStatusContainer from '../../MyPosts/ProfileStatus/ProfileStatusContainer';
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
            </div>
            <div>
                <div className={s.profileInfo}>
                    <img src={
                        props.user.photos.small !== null
                            ? props.user.photos.small
                            : `https://picsum.photos/seed/${props.user.userId}/200/300`
                    }
                        className={s.userImg}
                    />
                    <div className={s.infoWrapper}>
                        <div className={s.name}>{props.user.fullName}</div>
                        <ProfileStatusContainer id={props.id}/>
                        <div className={s.additionalInfo}>
                            <div>My id: {props.user.userId}</div>
                            <div className={s.lookingForAJob}>
                                {
                                    props.user.lookingForAJob
                                        ? 'Looking for a job'
                                        : 'Not looking for a job'
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default User;