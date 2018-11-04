import React, { Component } from 'react';
import UiCard from '../../components/card/UiCard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fetched: false
        }
    }
    componentDidMount() {
        console.log("hello;")
        fetch('http://localhost:3003/api/v1/user/feed')
            .then((res) => res.json().then((response) => {
                this.setState({
                    data: response.data,
                    fetched: true
                })
            }));
    }
    render() {
        if (this.state.fetched) {
            return (
                <div>
                    <UiCard
                        nickname={this.state.data[0].nickname}
                        avatar={this.state.data[0].avatar}
                        time={this.state.data[0].time}
                        caption={this.state.data[0].caption}
                        image={this.state.data[0].image} />
                </div >
            );
        }
        else {
            return (
                <div>
                    Your interet isn't working I Guess
                </div>
            );
        }
    }
}

export default Home;