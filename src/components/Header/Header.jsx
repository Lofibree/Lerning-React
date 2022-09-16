import React from 'react';
import s from './Header.module.css';
import HeadItem from './HeadItem/HeadItem';

const Header = () => {
    return (
        <div className={s.header}>
            <header>
                <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
            </header>
            <HeadItem title='Home'/>
            <HeadItem title='Contacts'/>
            <HeadItem title='About'/>
        </div>
    );
};

export default Header;