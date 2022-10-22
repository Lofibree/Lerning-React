import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import Users from './Users';
import { followUnFollowAC, setUsersAC, setUsersImgAC, combineUserAndImgAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import { useDispatch } from 'react-redux';


const UsersContainer = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersPage.usersBank);
    const pageSize = useSelector(state => state.usersPage.pageSize);
    const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount);
    const currentPage = useSelector(state => state.usersPage.currentPage);

    const onClickFollowUnFollow = (id) => {
        dispatch(followUnFollowAC(id));
    }

    const setUsers = (newUsers) => {
        dispatch(setUsersAC(newUsers))
    }
    const setTotalUsersCount = (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount))
    }
    const setUsersImg = (usersImg) => {
        dispatch(setUsersImgAC(usersImg));
        dispatch(combineUserAndImgAC());
    }
    const setCurrentPage = (currentPage) => {
        dispatch(setCurrentPageAC(currentPage))
    }
    // const combineUsersAndImg = () => {
    //     dispatch(combineUserAndImgAC());
    // }

    const usersItemsEl = users
        .map(u => 
            <UserItem name={u.name}
                id={u.id}
                status={u.status}
                photo={u.photos.small}
                onClickFollowUnFollowCont={onClickFollowUnFollow}
                isFollowed={u.followed
                    ? 'Unfollow'
                    : 'Follow'}
            />
        );

    return (<Users
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        usersItemsEl={usersItemsEl}
        setUsersCont={setUsers}
        setTotalUsersCountCont={setTotalUsersCount}
        setUsersImgCont={setUsersImg}
        setCurrentPageCont={setCurrentPage}
        // combineUsersAndImgCont={combineUsersAndImg}
    />
    );
};


export default UsersContainer;