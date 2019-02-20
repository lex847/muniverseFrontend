import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Snackbar, SnackbarContent, Icon, IconButton } from '@material-ui/core';

import LoginComp from '../../Components/Login/Login';
import authAction from '../../Store/Actions/authAction';
import './Login.css'
import Loader from '../../Components/Loader/Loader'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            submitted: false,
            error: false,
            showPassword: false
        };

        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    }

    usernameChange(e) {
        const { value } = e.target;
        this.setState({ userName: value })
    }
    passwordChange(e) {
        const { value } = e.target;
        this.setState({ password: value })
    }
    handleClickShowPassword = () => {

        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { userName, password } = this.state;
        const { dispatch } = this.props;
        if (userName && password) {
            dispatch(authAction.login(userName, password));
        }
    }
    render() {
        if (this.props.user) {
            return <Redirect to='/' />
        }

        return (
            <div className="loginContainer" >
                {this.props.loading ? <Loader>We are signing you in..Ma chudao</Loader> : null}
                <LoginComp
                    usernameChange={this.usernameChange}
                    passwordChange={this.passwordChange}
                    handleSubmit={this.handleSubmit}
                    showPassword={this.state.showPassword}
                    handleClickShowPassword={this.handleClickShowPassword}
                    error={this.state.error}
                />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.props.msg}
                    autoHideDuration={3000}
                >
                    <SnackbarContent
                        id="snackbar-warning"
                        aria-describedby="client-snackbar"
                        message={
                            <span id="client-snackbar">
                                <Icon>warning</Icon>
                                <span id="message-id">{this.props.msg}</span>
                            </span>}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={() => { this.props.dispatch(authAction.clearError()) }}
                            >
                                <Icon>close</Icon>
                            </IconButton>,
                        ]}

                    />
                </Snackbar>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { loading, error, user, msg } = state.authReducer;
    return {
        loading,
        error,
        user,
        msg
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };