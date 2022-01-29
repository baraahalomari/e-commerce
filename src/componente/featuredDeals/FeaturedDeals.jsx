import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './style.css';
import styled from 'styled-components';
import {mobileSmall} from '../../res';
import { postData } from './data';

const FirstContainer = styled.div`
display: flex;
margin:40px 20px;
flex-direction:column;
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
const FeaturedDeals = () => {
  return (
    <FirstContainer>
      <SecondContainer>
        <Title>Featured Auckland Deals</Title>
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
              <div class="centered">{post.details}</div>
              <div class="bottom-center"><KeyboardArrowUpIcon/></div>
              </div>
              <Typography className="title" gutterBottom variant="h5" component="h2" >{post.title}</Typography>
              <CardContent>
                <Typography variant="body2" className="nameColor" component="p" >{post.name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" >{post.description}</Typography>
              </CardContent>
              <CardActions className="cardActions">
                <Button className="cardButton" style={{ color:"red"}}  >from <br />  {post.price}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </FirstContainer>
  );
};

export default FeaturedDeals;
