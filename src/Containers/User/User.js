import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fetched: false
        }
    }
    componentDidMount() {
        const url = 'http://localhost:3003/api/v1/user/user?userName='+this.props.match.params.user;
        fetch(url)
            .then((res) => res.json().then((response) => {
                this.setState({
                    data: response.data,
                    fetched: response.statusCode === 200? true:false
                })
            }));
    }
    render() {
        if (this.state.fetched) {
            return (
                <div>
                    Some one motherfucker will appear here
                </div>
            )
        }
        else {
            return (
                <div>
                    C'mon motherfucker user doesn't exist
                </div>
            )
        }
    }
}

export default User;