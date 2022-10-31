import React from 'react';
import UserStatusContainer from '../UserStatus/UserStatusContainer';
import {AiOutlineLeft, AiOutlineRight, AiOutlineArrowLeft} from 'react-icons/ai' 
import s from './User.module.css';
import { NavLink, useNavigate } from 'react-router-dom';


const User = (props) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/users')
    }

    return (
        <>
            <UserStatusContainer {...props} />
            <div className={s.arrowBox}>
                <AiOutlineArrowLeft onClick={goBack} className={s.arrowBtn}/>
                {/* <NavLink to={'/users/' + ((props.id*1) - (1*1))}><AiOutlineLeft className={s.arrowBtn}/></NavLink>
                <NavLink to={'/users/' + ((props.id*1) + (1*1))}><AiOutlineRight className={s.arrowBtn}/></NavLink> */}
                {/* <AiOutlineLeft className={s.arrowBtn}/>
                <AiOutlineRight className={s.arrowBtn}/> */}
            </div>
        </>
    );
};



export default User;