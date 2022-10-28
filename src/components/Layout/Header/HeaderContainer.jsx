import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from './../../../redux/authReducer'


class HeaderContainer extends React.Component {
    // constructor(props) {super(props)};

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data; 
                this.props.setAuthUserData(id, email, login)
            } 
        })
    }
    render() {
        return (
            <Header 
                isAuth={this.props.isAuth}
                login={this.props.login}
                id={this.props.id}
                email={this.props.email}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id,
        email: state.auth.email,
    }
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);