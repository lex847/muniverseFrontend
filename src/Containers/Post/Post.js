import React, { Component } from 'react';

class Post extends Component {
    componentDidMount() {
        console.log(this.props.match.params);
    }
    render() {
        return (
            <div>
                Who the fuck calls you here
            </div>
        )
    }
}

export default Post;