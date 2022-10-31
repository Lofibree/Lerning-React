import React from 'react';
import s from './Login.module.css'

const Login = () => {
    return (
        <div className={s.authorizeWrapper}>
            <img src='https://sun9-80.userapi.com/impg/Icnvqh3rg6RbQzxLKUNGE40dYPCQz6zQKf2DXQ/rOX_FwkzH-E.jpg?size=1280x960&quality=95&sign=37106ba7c1301dac7a9efd231ea08774&type=album' />
            <div className={s.authorizeText}>Authorize please!!!</div>
        </div>
    );
};

export default Login;