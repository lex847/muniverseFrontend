import React, { Component } from "react";
import { Router, Redirect, Link } from 'react-router-dom';

import "./Post.css";

class UiCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLiked: true
        }
    }
    changeColor() {
        this.setState({
            buttonLiked: !this.state.buttonLiked
        })
    }

    tempFunction(data) {
        console.log(data);
        // <Link to="/vishichoudhary/fhefhefefeh" />
    }
    render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;
        const postTime = this.props.time;
        let likeBtnCls = this.state.buttonLiked ? "like-button" : "liked-button";

        return (
            <div className="Post" ref="Post">
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
                <div onClick={this.tempFunction.bind(this)}>
                    <div className="Post-image">
                        <div className="Post-image-bg">
                            <img alt={caption} src={image} />
                        </div>
                    </div>
                </div>
                <button className={likeBtnCls} onClick={this.changeColor.bind(this)}>
                    <i className="fa fa-heart" ></i> Like
                </button>
                <Link to="vishichoudhary/whocare/comments/fhe">
                    <button className="comment-button">
                        <i className="fa fa-comment"></i> Comment
                </button>
                </Link>
            </div>
        );
    }
}
export default UiCard;