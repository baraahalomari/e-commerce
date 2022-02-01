import React from 'react';
import styled from 'styled-components';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile ,mobileSmall} from '../res';
const Container = styled.div`
  height:70px;
  background-color:rgb(1,178,238);
  color:white;
  width:100%;
  ${mobile({ width: '100%' })}
  ${mobileSmall({ width: '100wv',position:'relative' })}
  

`;
const Wrapper = styled.div`
padding:0.5rem 2rem;
display:flex;
`;
const SecWrapper = styled.div`
display:flex;
color:white;
${mobile({ display: 'none' })};
`;
const ResponsiveIcon = styled.div`
display:flex;
color:white;
${mobile({ right: '0px' })};
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center
justify-content:center;
font-weight:900;
`

const Right = styled.div`
flex:1;
display:flex;
padding:0px 0.5rem;
align-items:center;
justify-content:end;
color:white;
${mobile({ padding: '0px', justifySelf: 'end', justifyContent: 'end' })};
`
const IconContainer = styled.span`
padding:0.5rem 0.5rem 0rem 0.5rem;
align-items:center;
font-size:16px;
color:white;
cursor:pointer;
`

const Logo = styled.h1`
font-weight:1500;
font-size:30px;
align-items:center;
justify-content:center;
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
padding-left:1rem; 
color: rgb(79,88,100);
&:hover {
  color:rgb(48,207,254);
}
`;
const DropDown = styled.div`
display:flex;
flex-direction:column;
position:relative;
padding:0px ;
width:100%;

margin:0px;
`;

const Navebar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <>
      <IconContainer>
        <Button style={{ color: 'white' }}
          onClick={handleClick}
        >
          <RoomOutlinedIcon style={{ paddingRight: '4px' }} />
          Auckland
          <KeyboardArrowDownIcon style={{ paddingLeft: '4px' }} />
        </Button>
      </IconContainer>
      <Menu style={{ top: '47px' }}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <DropDown>
        <MenuItem 
        style={{  padding: '10px 15px'}} 
        onClick={handleMenuClose}
        >
          Waikato
        </MenuItem>
        <MenuItem style={{ borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMenuClose}>
          Wellington
        </MenuItem>
        <MenuItem style={{ borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMenuClose}>
          Northland
        </MenuItem>
        <MenuItem style={{ borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMenuClose}>
          Auckland
        </MenuItem>
        <MenuItem style={{  borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMenuClose}>
          Manawatu - Wanganui
        </MenuItem>
        <MenuItem style={{ borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMenuClose}>
          Tauranga
        </MenuItem>
        <MenuItem style={{  borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMenuClose}>
          Rotorua - Taupoa
        </MenuItem>
        </DropDown>
      </Menu>
    </>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <>
      <IconContainer>
        <Button style={{ color: 'white' }}
          aria-controls={mobileMenuId}
          onClick={handleMobileMenuOpen}
        >
          <PermIdentityOutlinedIcon />
          <KeyboardArrowDownIcon />
        </Button>
      </IconContainer>
      <Menu style={{ top: '47px' }}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <DropDown>
        <MenuItem style={{  padding: '10px 15px'}}  onClick={handleMobileMenuClose} >My Account</MenuItem>
        <MenuItem style={{ borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMobileMenuClose} >Gifts</MenuItem>
        <MenuItem style={{ borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMobileMenuClose} >Profile</MenuItem>
        <MenuItem style={{ borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMobileMenuClose} >My Subscriptions</MenuItem>
        <MenuItem style={{  borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMobileMenuClose} >My Purchases</MenuItem>
        <MenuItem style={{  borderTop: '1px solid lightgrey', padding: '10px 15px'}} onClick={handleMobileMenuClose}>Logout</MenuItem>
        </DropDown>
      </Menu>
    </>
  );



  return (
    <Container>
      <Wrapper>

        <Left>
          <Logo>GrabOne</Logo>
        </Left>

        <Right>

          <ResponsiveIcon>

            {renderMenu}
            
          </ResponsiveIcon>
        
          <SecWrapper>
            <IconContainer>
              <FavoriteBorderIcon />
            </IconContainer>
            <IconContainer>
              <ShoppingCartOutlinedIcon />
            </IconContainer>
            {renderMobileMenu}
           
            <IconContainer>
              <span style={{ color: 'white', display: 'flex', alignItems: 'center' }}>


                <EmailOutlinedIcon style={{ paddingRight: '4px' }} />
                Subscribe
              </span>
            </IconContainer>
          </SecWrapper>
        
        </Right>
      </Wrapper>
    </Container>
  )
};

export default Navebar;
