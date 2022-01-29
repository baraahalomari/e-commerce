import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import styled from 'styled-components';
import {mobile} from '../../res';
import './style.css';
const Container = styled.div`
display:'none';
position:relative;
width:100wv;
${mobile({ display: 'flex' })};
`
const Wrapper = styled.div`
width: 100%;
height: 60px;
background-color: rgb(250, 250, 250);
position: fixed;
bottom: 0;
display: none;  
align-items: center;
${mobile({ display: 'flex' })};
`

const MinFooter = () => {
  return (
  <Container>
    <Wrapper >
      <div className="cataguro">
        <HomeOutlinedIcon/> <p> Home</p>
      </div>
      <div className="cataguro">
        <SearchOutlinedIcon/> <br/> Search
      </div>
      <div className="cataguro">
        <CategoryOutlinedIcon/> <br/> Category
      </div>
      <div className="cataguro">
        <ShoppingCartOutlinedIcon/><br/>  Cart
      </div>
      <div className="cataguro">
        <PermIdentityOutlinedIcon/><br/> Account
      </div>
    </Wrapper>
  </Container>
  );
};

export default MinFooter;
