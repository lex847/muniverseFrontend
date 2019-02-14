import React, { Component } from "react";

import "./NavBar.css";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import {withRouter} from 'react-router-dom';

class NavBar extends Component {
    render() {
        let style={
            grow:{
                flexGrow:1
            }
        }
        return (
            <div>
                <AppBar position="static" style={{backgroundColor:"green"}}>
                    <Toolbar>
                        <Typography variant="h6" style={style.grow} color="inherit" >
                            Muniverse
                    </Typography>
                    <Button onClick={()=>{this.props.history.push('/login')}} color="inherit">Login</Button>
                    <Button onClick={()=>{this.props.history.push('/signup')}} color="inherit">SignUp</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


export default withRouter(NavBar);