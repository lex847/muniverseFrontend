import React, { Component } from 'react';
import UiCard from './components/card/UiCard';
class App extends Component {
  render() {
    const avatar = "https://images.mapsofindia.com/who_is_who_new/2018/02/02051959/who-is-who-sports-sachin-tendulkar.jpg";
    const image="https://www.extremetech.com/wp-content/uploads/2016/05/AppleMusicFeature.jpg";
    return (
      <div>
        <UiCard
          nickname="Parth"
          avatar={avatar}
          time="50min"
          username="gamparth"
          caption="Sachin, is my hero"
          image={image} />
        <UiCard
          nickname="Parth"
          avatar={avatar}
          time="50min"
          username="gamparth"
          caption="Sachin, is my hero"
          image={image} />
      </div>
    );
  }
}

export default App;
