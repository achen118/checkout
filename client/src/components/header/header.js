import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';
import TrialBannerContainer from '../trial/trialBannerContainer';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    render() {
        let logoutButton;
        if (this.props.currentUser) {
            logoutButton = 
            <i
                onClick={this.handleLogout}
                className="fa fa-sign-out" aria-hidden="true">
            </i>;
        }
        return (
            <div className="header-container">
                <header className="app-header">
                    <Link to='/subscriptions'>
                        <h1 className="title">SF Social Club</h1>
                    </Link>
                    { logoutButton }
                </header>
                <TrialBannerContainer history={ this.props.history } />
            </div>
        );
    }
}