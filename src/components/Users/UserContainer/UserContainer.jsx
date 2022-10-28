import React from 'react';
import { usersAPI } from '../../api/api';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useParams } from 'react-router-dom';
import User from './User';
import { setIsFetchingUserAC, setUserAC, setUserImgCardAC } from './../../../redux/usersReducer';
import Preloader from '../../common/Preloader/Preloader';


class UserAJAX extends React.Component {
    constructor(props) { super(props) };

    componentDidMount() {
        this.props.setIsFetchingUser(true)
        usersAPI.setUserProfile(this.props.id)
            .then(data => {
                this.props.setIsFetchingUser(false);
                this.props.setUser(data);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetchingUser
                    ? <Preloader />
                    : <User
                        user={this.props.user}
                    />
                }

            </>
        )
    }
}


const UserContainer = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.usersPage.user);
    const isFetchingUser = useSelector(state => state.usersPage.isFetchingUser);

    const setUser = (user) => {
        dispatch(setUserAC(user))
    }
    const setIsFetchingUser = (isFetchingUser) => {
        dispatch(setIsFetchingUserAC(isFetchingUser))
    }

    return (
        <UserAJAX
            id={id}
            user={user}
            isFetchingUser={isFetchingUser}
            setIsFetchingUser={setIsFetchingUser}
            setUser={setUser}
        />
    );
};



export default UserContainer;