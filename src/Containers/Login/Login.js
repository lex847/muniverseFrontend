import React, { Component } from 'react';
import LoginComp from '../../Components/Login/Login';
import { userActions } from '../../Actions';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom'
import './Login.css'
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
            dispatch(userActions.login(userName, password));
        }
    }
    render() {
        if (this.props.loggingIn) {
            return <CircularProgress disableShrink />;
        }
        if (this.props.loggedIn) {
            return <Redirect to='/' />
        }
        if (this.props.type === 'alert-danger' && !this.state.error) {
            this.setState({ error: true })
        }
        return (
            <div className="loginContainer" >

                <LoginComp
                    usernameChange={this.usernameChange}
                    passwordChange={this.passwordChange}
                    handleSubmit={this.handleSubmit}
                    showPassword={this.state.showPassword}
                    handleClickShowPassword={this.handleClickShowPassword}
                    error={this.state.error}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { loggingIn, loggedIn } = state.authentication;
    const { type } = state.alert;
    return {
        loggingIn,
        loggedIn,
        type
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };