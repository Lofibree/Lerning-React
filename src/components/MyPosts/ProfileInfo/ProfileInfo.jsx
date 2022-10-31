import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatusContainer from '../ProfileStatus/ProfileStatusContainer';

const ProfileInfo = (props) => {

  return (
      <div className={s.profileCard}>
        <div className={s.bgImgProfile}></div>
        <div className={s.profileInfo}>
          <img src='https://sun9-8.userapi.com/impg/SPXuy_IeIvIx5G9GnWliHWaHt4XsdBtSy6QPGA/kStdPlFXzGY.jpg?size=811x722&quality=95&sign=b2307ccbf1448ea99f545b2e9309b699&type=album'
            className={s.profileImg}
          />
          <div className={s.infoWrapper}>
            <div className={s.name}>{props.login}</div>
            <ProfileStatusContainer id={props.id}/>
            <div className={s.additionalInfo}>
            <div>My id: {props.id}</div>
            <div>{props.email}</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileInfo;