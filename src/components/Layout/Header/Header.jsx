import React from 'react';
import s from './Header.module.css';
import HeadItem from './HeadItem/HeadItem';
import Moment from 'react-moment';

const Header = () => {
    return (
        <div className={s.header}>
            {/* <div> */}
                <a href='#'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldtpBMBBSRnmWKO0X6B2YUcq1SYCdec1kKF6svRKw&s' /></a>
            {/* </div> */}
            <div className={s.headItems}>
                <HeadItem title='Home' />
                <HeadItem title='Contacts' />
                <HeadItem title='About' />
                <Moment format="HH:mm" interval={1000} className={s.time}/>
            </div>
        </div>
    );
};

export default Header;