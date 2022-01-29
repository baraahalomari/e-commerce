import React from 'react';
import Announcement from '../componente/Announcement';
import Navebar from '../componente/Navbar';
import Header from '../componente/header/Header';
import './home.css';
import MinFooter from '../componente/minFoter/MinFooter';
import Post from '../componente/post/Post';
import InputEmail from '../componente/InputEmail';
import FeaturedDeals from '../componente/featuredDeals/FeaturedDeals';
import Activities from '../componente/activities/Activities';
import Footer from '../componente/footer/Footer';

const Home = () => {
  return (
    <>
     
      <Navebar />
      <Header />
      <MinFooter />
      <Announcement />
      <Post />
      <InputEmail />
      <FeaturedDeals />
      <Activities/>
      <Footer/>
     
    </>
  );
};

export default Home;
