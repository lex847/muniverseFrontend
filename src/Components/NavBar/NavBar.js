import React, { Component } from "react";

import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ml-auto" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto"></ul>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0 mr-md-3" type="submit">Search</button>
                        </form>
                        <button type="button" className="btn ml-md-3 mr-sm-2">Login</button>
                        <button type="button" className="my-2 my-sm-0 btn btn-success">Signup</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;