import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Protected = ({ component: Component, path, loggedIn }) => (
    <Route path={ path } render={ props => (
        loggedIn ? (
            <Component { ...props } />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);

const Auth = ({ component: Component, path, loggedIn }) => (
    <Route path={ path } render={ props => (
        !loggedIn ? (
            <Component { ...props } />
        ) : (
                <Redirect to="/subscriptions" />
            )
    )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.currentUser) };
};

export const AuthRoute = withRouter(connect(
    mapStateToProps
)(Auth));
export const ProtectedRoute = withRouter(connect(
    mapStateToProps
)(Protected));