import Slider from '../componente/Slider';
import React from 'react';
import Announcement from '../componente/Announcement';
import Navebar from '../componente/Navbar';
import Header from '../componente/header/Header';
import './home.css';
import MinFooter from '../componente/minFoter/MinFooter';
// import Discover from '../componente/discover/Discover';
import Post from '../componente/post/Post';
import InputEmail from '../componente/InputEmail';
import FeaturedDeals from '../componente/featuredDeals/FeaturedDeals';
import Activities from '../componente/activities/Activities';
import Footer from '../componente/footer/Footer';

const Home = () => {
  return (
    <>
      {/* <div className="containerGrid">
        <div className="navbar">
          <div className="header">
          </div>
          <div className="minWidth">
          </div>
        </div>
        <div className="annoucement">

        </div>
        <div className="discover">
        </div>
      </div> */}
      <Navebar />
      <Header />
      <MinFooter />
      <Announcement />
      <Post />
      <InputEmail />
      <FeaturedDeals />
      <Activities/>
      <Footer/>
      {/* <Slider /> */}
    </>
  );
};

export default Home;
