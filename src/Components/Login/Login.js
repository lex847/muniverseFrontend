import React from 'react';
import "./Login.css";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function Login(props) {
    return (
        <div className="Login">
            <Input
                defaultValue="email"
                id="username"
                inputProps={{
                    'aria-label': 'Description',
                }}
                onChange={props.usernameChange}
            />
            <Input
                defaultValue="password"
                id="password"
                inputProps={{
                    'aria-label': 'Description',
                }}
                onChange={props.passwordChange}
            />
            <Button onClick={props.handleSubmit}>
                Login
            </Button>
        </div>
    )
}

export default Login;