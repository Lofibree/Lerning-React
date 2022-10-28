import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';





const UserItem = (props) => {
    // debugger;
    const onFollowClick = () => {
        // debugger;
        props.onFollowClick(props.id)
        // debugger;
    }
    const onUnFollowClick = () => {
        // debugger;
        props.onUnFollowClick(props.id)
        // debugger;
    }

    return (
        <div className={s.item}>
            <div className={s.imgPlusFollow}>
                <NavLink to={'/users/' + props.id}>
                    <img
                        src={props.photo !== null
                            ? props.photo
                            : `https://picsum.photos/seed/${props.id}/200/300`
                        } />
                </NavLink>
                <div>
                    {props.isFollowed
                        ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={onUnFollowClick} >UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={onFollowClick} >Follow</button>
                    }
                </div>
            </div>
            <div className={s.innerItem}>
                <div className={s.namePlusLocation}>
                    <div className={s.name}>
                        <NavLink to={'/users/' + props.id}>{props.name}</NavLink>
                    </div>
                    <div className={s.location}>
                        <div>Location: <br/>I'm citizen of the world</div>
                    </div>
                </div>
                <div className={s.status}> 
                    {props.status !== null
                    ? props.status
                    : <span className={s.statusDefault}>I don't know what to say</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserItem;