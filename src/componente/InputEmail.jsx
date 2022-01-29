import React from 'react';
import styled from 'styled-components';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {mobile} from '../res';

const Container = styled.div`
height:100px;
background-color:white;
width:100wv;
display:flex;
margin:20px 15px;
box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
position:relative;
justify-content: space-around;
${mobile({flexDirection: 'column',alignItems: 'center',justifyContent: 'center',width: '100wv'})}
`;
const Paragraph = styled.span`
color:rgb(1,178,238);
font-size:24px;
font-weight:bold;
justify-content:center;
flex:1;
margin-left:20px;
${mobile({fontSize: '17px'})}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
border-radius: 5px;
display:flex;
align-items:center;
box-shadow:0px 1px 0px 1px rgba(0,0,0,0.12);
width:45%;
margin:30px 20px;
padding:10px;
position:relative;
${mobile({flex: '1',position:'absolute',margin:'auto'})}
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
width:8rem;
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
