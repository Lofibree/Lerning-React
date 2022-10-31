import React from 'react';
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux/es/exports';





export const withAuthNavigate = (Component) => {

    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    let mapStateToPropsForNavigate = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }


    return connect(mapStateToPropsForNavigate)(NavigateComponent);
};


