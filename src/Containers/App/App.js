import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Home from '../Home/Home';
import Post from '../Post/Post';
import User from '../User/User';
import Welcome from '../Welcome/Welcome';
import Error404 from '../Error/Error404';
import { Login } from '../Login/Login';
import Signup from '../Signup/Signup';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/" render={() => (
                localStorage.getItem('user') ? <Home /> : <Redirect to="/welcome" />
              )} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/error" component={Error404} />
              <Route exact path="/:user" component={User} />
              <Route exact path="/:user/:post" component={Post} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;