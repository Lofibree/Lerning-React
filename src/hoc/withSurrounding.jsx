import React from 'react';
import s from '../components/Users/UserContainer/User.module.css';
import fakePhoto from './../accets/images/placeholderImage.png'
import {BiImageAlt} from 'react-icons/bi'



export const withSurrounding = (Component) => {

    class SurroundComponent extends React.Component {

        getRandom() {
            Math.floor(Math.random()*this.props.userId)
        }
        render() {
            return (
                <>
                    <div className={s.user}>
                        <div style={
                            {
                                backgroundImage: `url(
                        ${this.props.photos.large !== null
                                        ? this.props.photos.large
                                        : `https://picsum.photos/seed/${this.props.userId|| this.props.id}/560/300`
                                    })`
                            }
                        }
                            className={s.userImgCard}
                        >
                        </div>
                        <div>
                            <div className={s.profileInfo}>
                                <img src={
                                    this.props.photos.small !== null
                                        ? this.props.photos.small
                                        : `https://picsum.photos/seed/${this.props.userId|| this.props.id}/200/300`
                                }
                                    className={s.userImg}
                                />
                                <div className={s.infoWrapper}>
                                    <div className={s.name}>{this.props.fullName || this.props.login}</div>
                                    <Component {...this.props} />
                                    <div className={s.additionalInfo}>
                                        <div>My id: {this.props.userId || this.props.id}</div>
                                        <div className={s.lookingForAJob}>
                                            {
                                                this.props.lookingForAJob
                                                    ? 'Looking for a job'
                                                    : 'Not looking for a job'
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.userPhotosBox}>
                                <div className={s.photosTitle}>
                                    <BiImageAlt />
                                    <span>Photos</span>
                                </div>
                                <div className={s.photos}>
                                <img src={`https://picsum.photos/seed/${this.props.userId -10 || this.props.id -10}/200/300`} />
                                    <img src=
                                        {
                                            this.props.photos.small !== null
                                                ? this.props.photos.small
                                                : `https://picsum.photos/seed/${this.props.userId || this.props.id}/200/300`
                                        }
                                    />
                                    <img src={fakePhoto} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
    return SurroundComponent
};


