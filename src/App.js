import React, { Component } from 'react';
import NavBar from './components/navBar/navBar';
import Home from './containers/home/home';
import Post from './components/post/post';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;