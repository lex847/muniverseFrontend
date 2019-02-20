import React, { Component } from "react";

import "./NavBar.css";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import authAction from "../../Store/Actions/authAction";

class NavBar extends Component {
    render() {
        let style = {
            grow: {
                flexGrow: 1
            }
        }
        return (
            <div>
                <AppBar position="static" style={{ backgroundColor: "green" }}>
                    <Toolbar>
                        <Typography variant="h6" style={style.grow} color="inherit" >
                            Muniverse
                    </Typography>
                        {this.props.user ? <Button onClick={() => {
                            this.props.dispatch(authAction.logout())
                            this.props.history.push('/')
                        }} color="inherit">Logout</Button> : [<Button onClick={() => { this.props.history.push('/login') }} color="inherit">Login</Button>,
                        <Button onClick={() => { this.props.history.push('/signup') }} color="inherit">SignUp</Button>]}

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}


export default withRouter(connect(mapStateToProps)(NavBar));