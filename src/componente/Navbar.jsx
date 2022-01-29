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
import { mobile } from '../res';
const Container = styled.div`
  height:70px;
  background-color:rgb(1,178,238);
  color:white;
  width:100%;
  ${mobile({ width: '100%' })}
  

`;
const Wrapper = styled.div`
padding:10px 20px;
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
font-weight:1000;
`
const Center = styled.div`
flex:1;
text-align:center
`
const Right = styled.div`
flex:1;
display:flex;
padding:0px 20px;
align-items:center;
justify-content:center;
color:white;
${mobile({ padding: '0px', justifySelf: 'end', justifyContent: 'end' })};
`
const IconContainer = styled.span`
padding:10px 10px 0px 10px;
align-items:center;
font-size:16px;
font-weight:bold;
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
margin-left:25px 
`

const Navebar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
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
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <RoomOutlinedIcon />
          Auckland
          <KeyboardArrowDownIcon />
        </Button>
      </IconContainer>
      <Menu style={{ flexDirection: 'column' }}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
        Waikato
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
        Wellington
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
        Northland
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
        Auckland
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
        Manawatu - Wanganui
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
        Tauranga
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
        Rotorua - Taupoa
        </MenuItem>
      </Menu>
    </>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <>
      <IconContainer>
              <Button style={{ color: 'white' }}
               
               
                onClick={handleClick}
              >
                <PermIdentityOutlinedIcon />
                <KeyboardArrowDownIcon />
              </Button>
            </IconContainer>
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
   <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px' }} >My Account</MenuItem>
              <MenuItem  >Gifts</MenuItem>
              <MenuItem  >Profile</MenuItem>
              <MenuItem  >My Subscriptions</MenuItem>
              <MenuItem  >My Purchases</MenuItem>
              <MenuItem  >Logout</MenuItem>
    </Menu>
    </>
  );



  return (
    <Container>
      <Wrapper>

        <Left>
          <Logo>GrabOne</Logo>
        </Left>
        <Center>
        </Center>
        <Right>

          <ResponsiveIcon>

            {renderMenu}
            {/* <IconContainer>
              <Button style={{ color: 'white' }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <RoomOutlinedIcon />
                Auckland
                <KeyboardArrowDownIcon />
              </Button>
            </IconContainer> */}
          </ResponsiveIcon>
          {/* <Menu style={{ color: 'black', border: '1px solid', margin: '0px', display: 'flex', flexDirection: 'column' }}
            // id="fade-menu"
            // MenuListProps={{
            //   'aria-labelledby': 'fade-button',
            // }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem style={{ color: 'black', border: '0.5px solid', padding: '5px', left: '5px', fontSize: '19px', fontWeight: '600' }} >Waikato</MenuItem>
            <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px', display: 'flex', flexDirection: 'column' }} >Wellington</MenuItem>
            <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px', display: 'flex', flexDirection: 'column' }} >Northland</MenuItem>
            <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px', display: 'flex', flexDirection: 'column' }} >Auckland</MenuItem>
            <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px', display: 'flex', flexDirection: 'column' }} >Manawatu - Wanganui</MenuItem>
            <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px', display: 'flex', flexDirection: 'column' }} >Tauranga</MenuItem>
            <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px', display: 'flex', flexDirection: 'column' }} >Rotorua - Taupoa</MenuItem>

          </Menu> */}
          <SecWrapper>
            <IconContainer>
              <FavoriteBorderIcon />
            </IconContainer>
            <IconContainer>
              <ShoppingCartOutlinedIcon />
            </IconContainer>
            {renderMobileMenu}
            {/* <IconContainer>
              <Button style={{ color: 'white' }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <PermIdentityOutlinedIcon />
                <KeyboardArrowDownIcon />
              </Button>
            </IconContainer> */}
            {/* <Menu style={{ color: 'black', border: '1px solid', margin: '0px', display: 'flex', flexDirection: 'column' }}

              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
            // TransitionComponent={Fade}
            >
              <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px' }} >My Account</MenuItem>
              <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px' }} >Gifts</MenuItem>
              <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px' }} >Profile</MenuItem>
              <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px' }} >My Subscriptions</MenuItem>
              <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px' }} >My Purchases</MenuItem>
              <MenuItem style={{ color: 'black', border: '1px solid', padding: '5px', left: '5px' }} >Logout</MenuItem>

            </Menu> */}
            <IconContainer>
              <span style={{ color: 'white', display: 'flex', alignItems: 'center' }}>


                <EmailOutlinedIcon />
                Subscribe
              </span>
            </IconContainer>
          </SecWrapper>
          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select style={{ borderStyle: 'none' }}
          value=""
          onChange=""
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <RoomOutlinedIcon/>
            Auckland
          </MenuItem>
          <MenuItem >Auckland</MenuItem>
          <MenuItem >Waikato</MenuItem>
          <MenuItem >Wellington</MenuItem>
          <MenuItem >Northland</MenuItem>
          <MenuItem >Manawatu - Wanganui</MenuItem>
          <MenuItem >Tauranga</MenuItem>
          <MenuItem >Rotorua - Taupoa</MenuItem>
        </Select>
       
      </FormControl> */}
          {/* <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem> */}
        </Right>
      </Wrapper>
    </Container>
  )
};

export default Navebar;
