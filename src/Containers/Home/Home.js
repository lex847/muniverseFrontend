import React, { Component } from 'react';
import Post from '../../Components/Post/Post';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fetched: false
        }
    }
    componentDidMount() {
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
                <div className="col-md-6 offset-3">
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