import React, { Component } from "react";

import "./Uicard.css";

class UiCard extends Component {
    render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;
        const postTime = this.props.time;

        return (
            <article className="Post" ref="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src={avatar} alt={nickname} />
                        </div>
                        <div className="Post-user-nickname">
                            <span><b>{nickname}</b></span>
                            <span className="time"> {postTime} ago</span>
                        </div>
                    </div>
                    <div className="Post-caption">
                        {caption}
                    </div>
                </header>

                <div className="Post-image">
                    <div className="Post-image-bg">
                        <img alt={caption} src={image} />
                    </div>
                </div>
                <button className="like-button">
                    <i className="fa fa-heart"></i> Like
                </button>
                <button className="comment-button">
                    <i className="fa fa-comment"></i> Comment
                </button>
            </article>
        );
    }
}
export default UiCard;