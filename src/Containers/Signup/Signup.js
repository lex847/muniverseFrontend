import React, { Component } from 'react';
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Icon, IconButton } from '@material-ui/core';

import SignupComp from '../../Components/Signup/Signup';
import './Signup.css'
import authAction  from '../../Store/Actions/authAction';
import Loader from '../../Components/Loader/Loader'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            matched: "false",
            error: false,
            showPassword: false
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    }
    inputChangeHandler(e) {
        if (e.target.name === 'confirmPassword') {
            if (e.target.value === this.state.password) {

                this.setState({
                    matched: true
                })
            }
            else {
                this.setState({
                    matched: false
                })
            }
        }
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleClickShowPassword = () => {

        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.matched) {
            return;
        }
        const user = {
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            fullName: this.state.fullName
        }
        const { dispatch } = this.props;
        if (user.userName && user.password) {
            dispatch(authAction.register(user));
        }
    }
    render() {
        return (
            <div className="signupContainer" >
                {this.props.loading ? <Loader>Creating your account</Loader> : null}
                <SignupComp
                    inputChangeHandler={this.inputChangeHandler}
                    handleSubmit={this.handleSubmit}
                    showPassword={this.state.showPassword}
                    handleClickShowPassword={this.handleClickShowPassword}
                    error={this.state.error}
                    matched={this.state.matched}
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
    const { loading, error, msg } = state.authReducer;
    return {
        loading,
        error,
        msg
    };
}
export default connect(mapStateToProps)(Signup);
