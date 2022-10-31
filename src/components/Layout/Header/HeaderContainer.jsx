import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getIsAuthThunkCreator } from './../../../redux/authReducer'
import { headerAPI } from '../../api/api';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getIsAuthThunkCreator();
    }
    render() {
        return (
            <Header 
                isAuth={this.props.isAuth}
                login={this.props.login}
                id={this.props.id}
                email={this.props.email}
                getIsAuthThunkCreator={this.props.getIsAuthThunkCreator}
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

export default connect(mapStateToProps, {getIsAuthThunkCreator}) (HeaderContainer);