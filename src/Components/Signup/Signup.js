import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import './Signup.css';
import { InputAdornment, IconButton, Icon, CircularProgress, FormLabel } from '@material-ui/core';

const styles = {
    paper: {
        marginTop: '15px',
        width: '800px',
        padding: '5px',
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
        backgroundColor:"green",
        color:"white",
        '&:hover': {
            backgroundColor: "rgb(0, 186, 0)",
          },
    },
    footer: {
        height: '70px',
        marginTop: '20px',
        marginLeft: '260px',
    }
}

function Signup(props) {
    console.log(props.matched);
    
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
                    onChange={props.inputChangeHandler}
                    name="userName"
                    margin="normal"
                    variant="outlined"
                    
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Confirm"
                                    onClick={props.verifyUsername}
                                >

                                    {props.checkingUsername===true ? <CircularProgress size={21}/>:null}
                                    {props.checkingUsername===false ? <Icon>autorenew</Icon>:null}
                                     
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {props.userNameAvailable===false?<FormLabel style={{textAlign:"center",display:"block",color:"red"}} component="error">Username Unavailable</FormLabel>:null}
                {props.userNameAvailable===true?<FormLabel style={{textAlign:"center",display:"block",color:"green"}} component="error">Username Available</FormLabel>:null}
            </div>
            <div>
                <TextField
                    id="fullName"
                    label="Full Name"
                    className={classes.textField}
                    onChange={props.inputChangeHandler}
                    name="fullName"
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
                    onChange={props.inputChangeHandler}
                    name="email"
                    margin="normal"
                    type="email"
                    variant="outlined"
                    inputProps={{ color: '#0b8221' }}
                />
            </div>
            <div>
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    className={classes.textField}
                    type={props.showPassword ? 'text' : 'password'}
                    onChange={props.inputChangeHandler}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={props.handleClickShowPassword}
                                >
                                    {props.showPassword ? <Icon>visibility</Icon> : <Icon>visibility_off</Icon>}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <div>
                <TextField
                    id="passwordConfirm"
                    label="Confirm Password"
                    className={classes.textField}
                    name="confirmPassword"
                    type="password"
                    onChange={props.inputChangeHandler}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Confirm"
                                >
                                    {props.matched===true ? <Icon style={{color:"green"}}>check_circle_outline</Icon>:null}
                                     {props.matched===false?<Icon style={{color:"red"}}>clear</Icon>:null}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <div>
                <Button
                    onClick={props.handleSubmit}
                    className={classes.button}
                    disabled={!(props.userNameAvailable===true)}
                    variant="contained"
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