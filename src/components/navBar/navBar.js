import React, { Component } from "react";

import "./navBar.css";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <a href = "#" class = "navbar-brand ">
                        Muninverse
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse ml-auto" id="navbarsExample04">
                        <ul class="navbar-nav mr-auto"></ul>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0 mr-md-3" type="submit">Search</button>
                        </form>
                        <button type="button" class="btn ml-md-3 mr-sm-2">Login</button>
                        <button type="button" class="my-2 my-sm-0 btn btn-success">Signup</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;