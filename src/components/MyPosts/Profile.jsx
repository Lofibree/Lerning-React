import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts';

const Profile = () => {
  return (
    <div>
      <div className={s.content}>
        <div>
          <img src='https://sun9-8.userapi.com/impg/SPXuy_IeIvIx5G9GnWliHWaHt4XsdBtSy6QPGA/kStdPlFXzGY.jpg?size=811x722&quality=95&sign=b2307ccbf1448ea99f545b2e9309b699&type=album' />
        </div>
        <MyPosts/>
      </div>
    </div>
  );
};

export default Profile;