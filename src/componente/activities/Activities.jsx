import React from 'react';
import { Card, CardActions, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { postData } from './data';
import './style.css';
import {mobileSmall} from '../../res';

const FirstContainer = styled.div`
display: flex;
margin: 40px 20px;
flex-direction: column;
`;
const SecondContainer = styled.div`
display:flex;
justify-content:start;
align-items:center;
padding:20px 10px;
${mobileSmall({flexDirection:'column'})}
`;
const Title = styled.h1`
color : #4d4d4d;
padding :10px;
`
const ButtonView = styled.button`
display:flex;
align-items:center;
justify-content:center;
padding :8px;
width:130px;
height:50%;
font-size:17px;
color:white;
background-color:rgb(1,178,238);
cursor:pointer;
border-radius:6px;
${mobileSmall({backgroundColor:'rgba(255, 255, 255, 0);',color:'rgb(1,178,238)',border:'none'})}
`
const Activities = () => {
  return (
    <FirstContainer>
      <SecondContainer>
        <Title>Activities, Events & Outdoors</Title>
        <ButtonView>view More <ArrowForwardIosIcon /> </ButtonView>
      </SecondContainer>
      <Grid container alignItems="stretch" spacing={4}>
        {postData.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="card"  >
              <div className="discriptin"> 
              <CardMedia className="media" image={post.image} title={post.title} />
              <div className="overlay2">
                <Button style={{ color: 'white' }} size="small" ><FavoriteBorderIcon className="icon" /></Button>
              </div>
              <div className="centered">{post.details}</div>
              <div className="bottom-left">FREE DELIVERY</div>
              </div>
              <Typography className="title" gutterBottom variant="h5" component="h2" >{post.title}</Typography>
              
              <CardActions className="cardActions">
                <Button className="cardButton"  style={{ color: 'rgb(1, 179, 238)', fontSize: '16px' }}>from <br />  {post.price}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </FirstContainer>
  );
};

export default Activities;
