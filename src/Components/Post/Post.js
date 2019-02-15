import React from 'react';
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Icon } from '@material-ui/core';
const Post = (props)=>{
    return(
        <Card style={{maxWidth:"600px"}}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" >
              R
            </Avatar>
          }
          action={
            <IconButton>
             <Icon>more_vert_icon</Icon>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions  disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <Icon>favorite</Icon>
          </IconButton>
          <IconButton aria-label="Share">
            <Icon>share</Icon>
          </IconButton>
         
        </CardActions>
        </Card>
    )
}
export default Post;