import React, { Component } from "react";

import "./NavBar.css";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";


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
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;
