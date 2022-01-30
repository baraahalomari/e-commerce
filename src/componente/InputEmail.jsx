import React from 'react';
import styled from 'styled-components';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {mobile,mobileSmall} from '../res';

const Container = styled.div`
height:150px;
background-color:white;
width:100wv;
display:flex;
flex-wrap: wrap;
margin:2rem 1.5rem;
box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
position:relative;
justify-content: start;
${mobile({flexDirection: 'column',width: '100wv'})};
${mobileSmall({height: '190px'})};
`;
const Paragraph = styled.span`
color:rgb(1,178,238);
font-size:24px;
font-weight:bold;
flex:1;
justify-content:start;
padding:1rem;
margin-left:1rem;
${mobile({position:'absolute'})}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
border-radius: 5px ;
display:flex;
align-items:center;
box-shadow:0px 1px 0px 1px rgba(0,0,0,0.12);
width:45%;
margin:3em 2rem;
padding:1rem;
position:relative;
${mobile({flex: '1',position:'absolute',marginTop:'4.5rem',width:'65%'})};
${mobileSmall({marginTop:'6.5rem'})};
`;
const Input = styled.input`
margin-left:8px;
font-size:16px;
width:65%;
border:none;
${mobile({fontSize:'13px'})};
`;

const Button = styled.button`
position:absolute;
right:0;
padding :10px;
border-radius: 0px 5px 5px 0px;
width:8rem;
height:100%;
font-size:16px;
font-weight:bold;
color:white;
background-color:rgb(1,178,238);
cursor:pointer;
${mobile({fontSize:'13px',width:'7rem'})};
`

const InputEmail = () => {
  return (
    <Container>
      <Paragraph>
        Get the best deals delivered to your inbox each day
      </Paragraph>
      <SearchContainer>
        <EmailOutlinedIcon style={{ color: 'gray', fontSize: '24px' }} />
        <Input placeholder="Enter your email" />
      <Button>Subscribe</Button>
      </SearchContainer>
    </Container>
  );
};

export default InputEmail;
