import React, { Component } from 'react';
import NavBar from './components/navBar/navBar';
import Home from './containers/home/home';
import Post from './containers/post/post';
import Error404 from './containers/error/error404';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/post/:post" component={Post} />
              <Route component={Error404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;