import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import { followUnFollowAC, setUsersAC, setUsersImgAC, combineUserAndImgAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC } from '../../redux/usersReducer';
import { useDispatch } from 'react-redux';
import Users from './Users';
import axios from 'axios'
import Preloader from '../common/Preloader/Preloader';



class UsersAJAX extends React.Component {
    
    constructor(props) {super(props);}


    componentDidMount() {
        this.props.setIsFetchingCont(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setIsFetchingCont(false);
                this.props.setUsersCont(response.data.items);
                this.props.setTotalUsersCountCont(response.data.totalCount);
            })

        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsersImgCont(response.data)
            })
    }



    onPageChanged = (pageNumber) => {
        this.props.setIsFetchingCont(true);
        this.props.setCurrentPageCont(pageNumber);
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
        .then(response => {
            this.props.setIsFetchingCont(false);
            this.props.setUsersCont(response.data.items);
        })

        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${this.props.pageSize}&_page=${this.props.pageNumber}`)
            .then(response => {
                this.props.setUsersImgCont(response.data)
            })
            // debugger;
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
    const setIsFetching = (isFetching) => {
        dispatch(setIsFetchingAC(isFetching))
    }

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

    return (
        <UsersAJAX
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            usersItemsEl={usersItemsEl}
            isFetching={isFetching}
            setUsersCont={setUsers}
            setTotalUsersCountCont={setTotalUsersCount}
            setUsersImgCont={setUsersImg}
            setCurrentPageCont={setCurrentPage}
            setIsFetchingCont={setIsFetching}
        />
    );
};


export default UsersContainer;