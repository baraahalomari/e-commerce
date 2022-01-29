import React from 'react';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './style.css';
const Footer = () => {
  return (
    <div class="footer">
      
        <div class="container">
          <div class="row">
            <Grid container alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <div class="col-lg-4 col-sm-4 col-xs-12">
                <div class="single_footer">
                  <h4>Services</h4>
                  <ul className="ulStyle">
                    <li><a href="#">Lorem Ipsum</a></li>
                    <li><a href="#">Simply dummy text</a></li>
                    <li><a href="#">The printing and typesetting </a></li>
                    <li><a href="#">Standard dummy text</a></li>
                    <li><a href="#">Type specimen book</a></li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single_footer single_footer_address">
                  <h4>Page Link</h4>
                  <ul className="ulStyle">
                    <li><a href="#">Lorem Ipsum</a></li>
                    <li><a href="#">Simply dummy text</a></li>
                    <li><a href="#">The printing and typesetting </a></li>
                    <li><a href="#">Standard dummy text</a></li>
                    <li><a href="#">Type specimen book</a></li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} >
              <div className="socialContent">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single_footer single_footer_address">
                  <h4>Subscribe today</h4>
                  <div class="signup_form">
                    <form action="#" class="subscribe">
                      <input type="text" class="subscribe__input" placeholder="Enter Email Address" />
                      <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                    </form>
                  </div>
                </div>
                <div class="social_profile">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"><FacebookIcon/></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"><TwitterIcon/></i></a></li>
                    <li><a href="#"><i class="fab fa-google-plus-g"><YouTubeIcon/></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"><InstagramIcon/></i></a></li>
                  </ul>
                </div>
              </div>
              </div>
            </Grid>
            </Grid >
          </div>
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-xs-12">
              <p class="copyright">Copyright © 2019 <a href="#">Akdesign</a>.</p>
            </div>
          </div>
        </div>
      
    </div >
  );
};

export default Footer;
