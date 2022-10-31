import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useParams } from 'react-router-dom';
import User from './User';
import { getUserThunkCreator } from './../../../redux/usersReducer';
import Preloader from '../../common/Preloader/Preloader';
import { getStatusThunkCreator } from '../../../redux/profileReducer';


class UserAJAX extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.id);
        this.props.setStatus(this.props.id)
    }

    render() {
        return (
            <>
                {this.props.isFetchingUser
                    ? <Preloader />
                    : <User
                        user={this.props.user}
                        getUserStatus={this.props.getUserStatus}
                        status={this.props.status}
                        // id={this.props.id}
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
    const status = useSelector(state => state.profilePage.status);


    const setStatus = (id) => {
        dispatch(getStatusThunkCreator(id))
    }

    const getUser = (id) => {
        dispatch(getUserThunkCreator(id))
    }

    return (
        <UserAJAX
            id={id}
            user={user}
            isFetchingUser={isFetchingUser}
            status={status}
            getUser={getUser}
            setStatus={setStatus}
        />
    );
};



export default UserContainer;