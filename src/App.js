import React, { Component } from 'react';
import UiCard from './components/card/UiCard';
import NavBar from './components/navBar/navBar';
// import ProfileCard from './components/profileCard/profileCard';
import "./App.css";
class App extends Component {
  render() {
    const avatar = "https://avatars1.githubusercontent.com/u/14358616?s=400&u=9f6ee034ad601bd6b83f4a60547888de02795418&v=4"
    const image = "https://www.extremetech.com/wp-content/uploads/2016/05/AppleMusicFeature.jpg";
    return (
      <div>
        <NavBar></NavBar>
        <div className="App" ref="Main">
          <UiCard
            nickname="Vishi choudhary"
            avatar={avatar}
            time="50min"
            caption="Sachin, is my hero"
            image={image} />
          <UiCard
            nickname="Vishi choudhary"
            avatar={avatar}
            time="50min"
            caption="Sachin, is my hero"
            image={image} />
        </div>
      </div >
    );
  }
}

export default App;