import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLogin} = useAuth();
    if (isLogin) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <img src="https://i.ibb.co/ryQjxJ8/Infinity-1s-200px.gif" alt="" />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;