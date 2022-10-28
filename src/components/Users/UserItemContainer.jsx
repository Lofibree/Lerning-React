import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UserItem from './UserItem';
import { setFollowAC, setUnFollowAC, toggleFollowingProgressAC } from '../../redux/usersReducer';
import { usersAPI } from '../api/api';




class UserItemAJAX extends React.Component {

    onFollowClick = (userId) => {
        // debugger;
        this.props.toggleFolllowingProgress(true, userId);

        usersAPI.setFollow(userId).then(data => {
            // debugger;
            if (data.resultCode === 0) {
                this.props.setFollow(true, userId)
            }
            // debugger;

            this.props.toggleFolllowingProgress(false, userId);
        })
    }
    onUnFollowClick = (userId) => {
        // debugger;
        this.props.toggleFolllowingProgress(true, userId);
        usersAPI.setUnFollow(userId).then(data => {
            if (data.resultCode === 0) {
                this.props.setUnFollow(false, userId)
            }
            this.props.toggleFolllowingProgress(false, userId);
        })
    }
    render() {
        return (
            <UserItem
                {...this.props}
                followingInProgress={this.props.followingInProgress}
                onFollowClick={this.onFollowClick}
                onUnFollowClick={this.onUnFollowClick}
            />
        )
    }
}


const UserItemContainer = (props) => {

    const dispatch = useDispatch();

    const usersBank = useSelector(state => state.usersPage.usersBank);
    const getIsFollowed = () => {
        let neededUserIndex = usersBank.findIndex(user => user.id === props.id);
        let isFollowed = usersBank[neededUserIndex].followed
        return isFollowed
    }
    const followingInProgress = useSelector(state => state.usersPage.followingInProgress);
    const toggleFolllowingProgress = (followingInProgress, id) => {
        dispatch(toggleFollowingProgressAC(followingInProgress, id))
    }
    const setFollow = (isFollowedResault, id) => {
        dispatch(setFollowAC(isFollowedResault, id))
    }
    const setUnFollow = (isUnFollowedResault, id) => {
        dispatch(setUnFollowAC(isUnFollowedResault, id))
    }
    return (
        <UserItemAJAX
            {...props}
            followingInProgress={followingInProgress}
            setFollow={setFollow}
            setUnFollow={setUnFollow}
            isFollowed={getIsFollowed()}
            toggleFolllowingProgress={toggleFolllowingProgress}
        />
    );
};

export default UserItemContainer;