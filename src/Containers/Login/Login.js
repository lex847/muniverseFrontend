import React, { Component } from 'react';
import LoginComp from '../../Components/Login/Login';
import { userActions } from '../../Actions';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            submitted: false
        };

        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    usernameChange(e) {
        const { value } = e.target;
        this.setState({ userName: value })
    }
    passwordChange(e) {
        const { value } = e.target;
        this.setState({ password: value })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        // const { userName, password } = this.state;
        const  userName = "vishichoudhary";
        const  password= "vishichoudhary";
        const { dispatch } = this.props;
        if (userName && password) {
            dispatch(userActions.login(userName, password));
        }
    }
    render() {
        // const { loggingIn } = this.props;
        // const { username, password, submitted } = this.state;
        return (
            <Grid container >
                <Grid item sm={4} xs={12}>
                    <LoginComp
                        usernameChange={this.usernameChange}
                        passwordChange={this.passwordChange}
                        handleSubmit={this.handleSubmit}
                    />
                </Grid>
            </Grid>
        )
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };