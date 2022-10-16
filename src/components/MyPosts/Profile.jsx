import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPostsContainer'; 


const Profile = () => {

  return (
    <div>
      <div className={s.content}>
        <ProfileInfo />
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;