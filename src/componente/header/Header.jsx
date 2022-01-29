import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import BrowserCategories from './BrowserCategories';
import './headerCon.css';
import {mobile} from '../../res';
const Container = styled.div`
height:60px;
background-color:White;
color:gray;
display:flex;
width: 100%;
box-shadow:0px 1px 3px rgba(0,0,0,0.12);
${mobile({display:'none'})}
`

const Header = () => {
  return (
    <Container >
      <div className="left">
        <span className="cataguries">
          <BrowserCategories />
        </span>
        <span className="cataguries">
          What's New
        </span>
        <span className="cataguries">
          Trending
        </span>
        <span className="cataguries">
          For You
        </span>
      </div>
      <div className="right">
        <div className="searchContainer">
          <SearchIcon style={{ color: 'gray', fontSize: '24px' }} />
          <input className="inputs" placeholder="Search GrabOne" />
        </div>
      </div>

    </Container>
  );
};

export default Header;
