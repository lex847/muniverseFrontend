import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import './Signup.css';

const styles = {
    paper: {
        marginTop: '15px',
        width: '800px',
        padding: '5px',
        marginLeft: '280px',
        height: '700px',
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
    error: {
        color: 'red',
        marginTop: '20px',
        marginLeft: '300px',
        textDecoration: 'blink'
    },
    text: {
        fontSize: '35px',
        marginLeft: '160px',
    },
    textField: {
        marginTop: '20px',
        marginLeft: '80px',
        width: '620px',
    },
    button: {
        marginTop: '20px',
        marginLeft: '80px',
        background: "#0b8221"
    },
    footer: {
        height: '70px',
        marginTop: '20px',
        marginLeft: '260px',
    }
}

function Signup(props) {
    const { classes } = props;
    return (
        <Paper elevation={1} className={classes.paper}>
            <div className={classes.header}>
                <span className={classes.headerSpan}>Muniverse</span>
                Muniverse
            </div>
            <div className={classes.text}>Signup to get some good music</div>
            <div>
                <TextField
                    id="username"
                    label="Username"
                    className={classes.textField}
                    onChange={props.usernameChange}
                    margin="normal"
                    variant="outlined"
                    inputProps={{ color: '#0b8221' }}
                />
            </div>
            <div>
                <TextField
                    id="fullName"
                    label="Full Name"
                    className={classes.textField}
                    onChange={props.usernameChange}
                    margin="normal"
                    variant="outlined"
                    inputProps={{ color: '#0b8221' }}
                />
            </div>
            <div>
                <TextField
                    id="email"
                    label="Email Address"
                    className={classes.textField}
                    onChange={props.usernameChange}
                    margin="normal"
                    type="email"
                    variant="outlined"
                    inputProps={{ color: '#0b8221' }}
                />
            </div>
            <div>
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    onChange={props.passwordChange}
                    margin="normal"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="passwordConfirm"
                    label="Confirm Password"
                    className={classes.textField}
                    type="password"
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
                   Signup 
                </Button>
            </div>
            <div className={classes.footer}>
                Already a member? <Link to="/login" style={{ color: "#0b8221" }}>Login Now</Link>
            </div>
        </Paper>
    )
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);