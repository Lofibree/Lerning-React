import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
        <div className={s.mainImg}>
          <img src='https://sun9-8.userapi.com/impg/SPXuy_IeIvIx5G9GnWliHWaHt4XsdBtSy6QPGA/kStdPlFXzGY.jpg?size=811x722&quality=95&sign=b2307ccbf1448ea99f545b2e9309b699&type=album' 
          // className={s.mainImg}
          />
        </div>
        {/* <div className={s.descriptionBlock}>

        </div> */}
    </div>
  );
};

export default ProfileInfo;