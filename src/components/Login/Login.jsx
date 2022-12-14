import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunkCreator } from '../../redux/authReducer';
import { Input, Button } from '../common/FormsControls/FormsControls';
import PhotoPopupOnClick from '../common/PhotoPopup/PhotoPopupOnClick';
import { requiredField, maxLengthCreator } from '../Utils/Validators/validators';
import s from './Login.module.css'

const Login = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth)
    const navigate = useNavigate();

    const login = (formData) => {
        dispatch(loginThunkCreator(formData))
    }

    if (isAuth) {
        navigate('/profile')
    }

    return (
        <div className={s.authorizeWrapper}>
            <PhotoPopupOnClick>
                <img src='https://sun9-80.userapi.com/impg/Icnvqh3rg6RbQzxLKUNGE40dYPCQz6zQKf2DXQ/rOX_FwkzH-E.jpg?size=1280x960&quality=95&sign=37106ba7c1301dac7a9efd231ea08774&type=album' />
            </PhotoPopupOnClick>
            <div className={s.authorizeText}>Authorize please!!!</div>
            <LoginReduxForm  onSubmit={login}/>
        </div>
    );
};

const maxLength40 = maxLengthCreator(40);


const LoginForm = (props) => {
    const { handleSubmit } = props;
 
    return (
        <form className={s.formLogin} onSubmit={handleSubmit}>
            <div><Field placeholder={'email'} name={'email'} component={Input} validate={[requiredField, maxLength40]}/></div>
            <div><Field placeholder={'password'} name={'password'} 
            type={'password'} 
            component={Input} validate={[requiredField, maxLength40]}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me</div>
            {
                props.error &&
                <div className={s.formSummaryError}>{props.error}</div>
            }
            <Field component={Button}>Login</Field>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)


export default Login;