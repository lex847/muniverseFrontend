import React, { Component } from 'react';
import LoginComp from '../../Components/Login/Login';
import { userActions } from '../../Actions';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <Grid container >
                <Grid item sm={4} xs={12}>
                    <LoginComp
                        handleSubmit={this.handleSubmit}
                        changeSubmit={this.handleChange}
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