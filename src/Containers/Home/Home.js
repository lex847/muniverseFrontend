import React, { Component } from 'react';
import Post from '../../Components/Post/Post';
import config from '../../Helpers/config';
import './Home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fetched: false
        }
    }
    componentDidMount() {
        fetch(config.serverUrl+'/api/v1/user/feed')
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
                <div className="home">
                    <Post
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