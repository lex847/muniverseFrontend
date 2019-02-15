import React, { Component } from 'react';
import LoginComp from '../../Components/Login/Login';
import { userActions } from '../../Actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
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
            dispatch(userActions.login(userName, password));
        }
    }
    render() {
        if (this.props.user) {
            return <Redirect to='/' />
        }
        if (this.props.error) {
            this.setState({ error: true,msg:this.props.msg })
        }
        return (
            <div className="loginContainer" >
                {this.props.loading?<Loader>We are signing you in..Ma chudao</Loader>:null}
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
    const { loading, error,user,msg } = state.authentication;
    return {
        loading,
        error,
        user,
        msg
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };