import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import styled from 'styled-components';
import {mobile,mobileSmall} from '../../res';
import './style.css';
const Container = styled.div`
display:'none';
position:relative;
width:100%;
${mobile({ display: 'flex' })};
`
const Wrapper = styled.div`
display:flex;
width: 100%;
height: 60px;
background-color: rgb(250, 250, 250);
position: fixed;
z-index: 999;
bottom: 0;
display: none;  
align-items: center;
justify-content: center;
${mobile({ display: 'flex' })};
`

const MinFooter = () => {
  return (
  <Container>
    <Wrapper >
      <div className="cataguro">
        <HomeOutlinedIcon/> <p className="cataguro"> Home</p>
      </div>
      <div className="cataguro">
        <SearchOutlinedIcon/> <p className="cataguro">Search</p> 
      </div>
      <div className="cataguro">
        <CategoryOutlinedIcon/> <p className="cataguro">Category</p> 
      </div>
      <div className="cataguro">
        <ShoppingCartOutlinedIcon/><p className="cataguro"> Cart</p>
      </div>
      <div className="cataguro">
        <PermIdentityOutlinedIcon/><p className="cataguro"> Account</p>
      </div>
    </Wrapper>
  </Container>
  );
};

export default MinFooter;
