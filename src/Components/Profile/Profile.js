import React from 'react';
import './Profile.css'
import { Grid, Avatar } from '@material-ui/core';
import Profilepic from '../../assets/images/profilepic.jpg';
import Coverpic from '../../assets/images/coverimage.png';
import Post from '../../Components/Post/Post';
const Profile = (props) => {
    return (
        <div className="profile">
            <div className="cover-img"><img src={Coverpic}/></div>
            <Grid container className="user-nav">
                <Grid item className="profile-img-p"> 
                    <Avatar src={Profilepic} className="profile-img"/>
                </Grid>
                <Grid item className="profile-name"> 
                    <label>Amit Chambial</label>
                </Grid>
                <Grid item className="profile-followers"> 
                    <label>Followers</label>
                    <label>100</label>
                </Grid>
                <Grid item className="profile-followers"> 
                    <label>Following</label>
                    <label>89</label>
                </Grid>
                <Grid item className="profile-followers"> 
                    <label>Liking</label>
                    <label>201</label>
                </Grid>
            </Grid>
            <Grid container style={{ color: "white" }}>
                <Grid item xs={3} className="my-info">SideBar</Grid>
                <Grid item xs={6} className="my-tweets">
                    <Post/>
                    <Post/>
                    <Post/>
                </Grid>
                <Grid item xs={3} className="trends">SideBar</Grid>
            </Grid>
        </div>)
}
export default Profile;