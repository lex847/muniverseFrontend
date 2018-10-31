import React, { Component } from "react";

import "./profileCard.css";

class ProfileCard extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        return (
            <div className="profileCard" ref="profileCard">
                <header>
                    <div className="profileCard-user">
                        <div className="profileCard-user-avatar">
                            <img src={avatar} alt={nickname} />
                        </div>
                        <div className="profileCard-user-nickname">
                            <span><b>{nickname}</b></span>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default ProfileCard;