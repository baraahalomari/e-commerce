import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './style.css';
import styled from 'styled-components';
import { mobile, mobileSmall } from '../../res';
import { postData } from './data';

const FirstContainer = styled.div`
padding:1rem 2rem;
display: flex;
`;
const DiscoverCont = styled.div`
background-color: white;
width:33.333%;
margin-right: 1rem;
justify-content: space-between;

${mobile({ display: 'none' })};
`;

const NumSpan = styled.span`
float:right;
`

const Post = () => {

  return (
    <FirstContainer>

      <DiscoverCont>

        <ul className="discoverCont" >

          <li className="discoverLiHeader">Discover </li>
          <li className="discoverLi">Featured Auckland deals <NumSpan>141</NumSpan></li>

          <li className="discoverLi">Collections<NumSpan>65</NumSpan></li>

          <li className="discoverLi">Escapes<NumSpan>100</NumSpan></li>
          <li className="discoverLi">Picked for You<NumSpan>17</NumSpan></li>
          <li className="discoverLi">Activities, Events & Outdoors<NumSpan>91</NumSpan></li>
          <li className="discoverLi">Store<NumSpan>141</NumSpan></li>
          <li className="discoverLi">Restaurants, Bars, Cafes<NumSpan>22</NumSpan></li>
          <li className="discoverLi">Beauty, Message, Cafes<NumSpan>78</NumSpan></li>
          <li className="discoverLi">House & Garden<NumSpan>50</NumSpan></li>
          <li className="discoverLi">Fitness & sports<NumSpan>200</NumSpan></li>
          <li className="discoverLi">Automotive<NumSpan>30</NumSpan></li>
        </ul>

      </DiscoverCont>

      <Grid container alignItems="stretch" spacing={2}>
        {postData.map((post, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Card className="card"  >
              <div className="discriptin">
                <CardMedia className="media" image={post.image} title={post.title} />
                <div className="overlay2">
                  <Button style={{ color: 'white' }} size="small" ><FavoriteBorderIcon className="icon" /></Button>
                </div>
                <div class="centered">{post.details}</div>
                <div class="bottom-center"><KeyboardArrowUpIcon /></div>
              </div>

              <Typography className="title" gutterBottom variant="h5" component="h2" >{post.title}</Typography>
              <CardContent>
                <Typography variant="body2" className="nameColor" component="p" >{post.name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" >{post.description}</Typography>
              </CardContent>


              <CardActions className="cardActions">


                <Button className="cardButton" >from <br />  {post.price}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>


    </FirstContainer>

  )
}

export default Post