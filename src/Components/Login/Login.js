import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'

const styles = {
    paper: {
        marginTop: '15px',
        width: '800px',
        padding: '5px',
        marginLeft: '280px',
        height: '450px',
    },
    header: {
        position: 'relative',
        marginTop: '20px',
        marginLeft: '260px',
        fontFamily: 'Sofia',
        fontSize: '60px',
        color: "#000000"
    },
    headerSpan: {
        height: '60%',
        position: 'absolute',
        color: '#0b8221',
        overflow: 'hidden',
    },
    text: {
        fontSize: '35px',
        marginLeft: '160px',
    },
    textField: {
        marginTop: '20px',
        marginLeft: '80px',
        width: '350px',
    },
    button: {
        marginTop: '20px',
        marginLeft: '80px',
        background: "#0b8221"
    },
    forgot: {
        color: "#0b8221",
        display: 'inline-block',
        marginLeft: '100px',
        verticalAlign: 'middle',
        height: '0px',
    },
    footer: {
        height: '70px',
        marginTop: '20px',
        marginLeft: '260px',
    }
}

function Login(props) {
    const { classes } = props;
    return (
        <Paper elevation={1} className={classes.paper}>
            <div className={classes.header}>
                <span className={classes.headerSpan}>Muniverse</span>
                Muniverse
            </div>
            <div className={classes.text}>Login to get some good music</div>
            <div>
                <TextField
                    id="username"
                    label="Username"
                    className={classes.textField}
                    onChange={props.usernameChange}
                    margin="normal"
                    variant="outlined"
                    inputProps={{color: '#0b8221'}}
                />
            </div>
            <div>
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    onChange={props.passwordChange}
                    margin="normal"
                    variant="outlined"
                />
            </div>
            <div>
                <Button
                    onClick={props.handleSubmit}
                    className={classes.button}
                >
                    Login
                </Button>
                <Link to="/forgot" className={classes.forgot}>Forgot Password?</Link>
            </div>
            <div className={classes.footer}>
                Don't have any account yet? <Link to="/signup" style={{ color: "#0b8221" }}>Join Now</Link>
            </div>
        </Paper>
    )
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);