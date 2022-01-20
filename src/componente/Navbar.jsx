import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height:60px;
  
`;
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center
`
const Center = styled.div`
flex:1;
text-align:center
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:end;
`
const Languages = styled.div`
font-size:14px;
cursor:pointer;

`
const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display:flex;
align-items:center;
padding:5px;
margin-left:25px;
`
const Input = styled.input`
border:none
`
const Logo = styled.h1`
font-weight:bold
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px 
`

const Navebar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color: 'gray',fontSize:'16px'}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>carpenter</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
};

export default Navebar;
