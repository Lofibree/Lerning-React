import React from 'react';
import s from './Navbar.module.css';
import ProfItem from './ProfItem/ProfItem';

const Navbar = () => {
    return (
        <div className={s.navdiv}>
            <nav className={s.nav}>
                <div>
                    <ProfItem title='Profile' href='https://vk.com/lofibree'/>
                    <ProfItem title='Messages' href='https://vk.com/im'/>
                    <ProfItem title='News' href='https://vk.com/feed'/>
                    <ProfItem title='Music' href='https://vk.com/audios241946514'/>
                    <ProfItem title='Settings' href='https://vk.com/albums241946514'/>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;