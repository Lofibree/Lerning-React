import React from 'react';
import { useSelector } from 'react-redux';
import UserItemContainer from './UserItemContainer';
import { setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC } from '../../redux/usersReducer';
import { useDispatch } from 'react-redux';
import Users from './Users';
import { usersAPI } from '../api/api';
import Preloader from '../common/Preloader/Preloader';



class UsersAJAX extends React.Component {
    
    constructor(props) {super(props);}


    componentDidMount() {
        this.props.setIsFetchingCont(true);
        usersAPI.setUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setIsFetchingCont(false);
                this.props.setUsersCont(data.items);
                this.props.setTotalUsersCountCont(data.totalCount);
            })
    }



    onPageChanged = (pageNumber) => {
        this.props.setIsFetchingCont(true);
        this.props.setCurrentPageCont(pageNumber);
        
        usersAPI.onPageSetUsers(this.props.pageSize, pageNumber)
        .then(data => {
            this.props.setIsFetchingCont(false);
            this.props.setUsersCont(data.items);
        })
    }



    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        usersItemsEl={this.props.usersItemsEl}
                        onPageChanged={this.onPageChanged}
                    />
                }
            </>
        );
    }
}



const UsersContainer = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersPage.usersBank);
    const pageSize = useSelector(state => state.usersPage.pageSize);
    const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount);
    const currentPage = useSelector(state => state.usersPage.currentPage);
    const isFetching = useSelector(state => state.usersPage.isFetching);


    // const onClickFollowUnFollow = (id) => {
    //     dispatch(followUnFollowAC(id));
    // }
    const setUsers = (newUsers) => {
        dispatch(setUsersAC(newUsers))
    }
    const setTotalUsersCount = (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount))
    }
    const setCurrentPage = (currentPage) => {
        dispatch(setCurrentPageAC(currentPage))
    }
    const setIsFetching = (isFetching) => {
        dispatch(setIsFetchingAC(isFetching))
    }

    const usersItemsEl = users
        .map(u => 
            <UserItemContainer name={u.name}
                id={u.id}
                status={u.status}
                photo={u.photos.small}
                // isFollowed={u.followed
                //     ? 'Unfollow'
                //     : 'Follow'}
            />
        );

    return (
        <UsersAJAX
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            usersItemsEl={usersItemsEl}
            isFetching={isFetching}
            setUsersCont={setUsers}
            setTotalUsersCountCont={setTotalUsersCount}
            setCurrentPageCont={setCurrentPage}
            setIsFetchingCont={setIsFetching}
        />
    );
};


export default UsersContainer;