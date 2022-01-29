import styled from 'styled-components';

const Container = styled.div`
height:300px;
display:flex;
align-items:center;
justify-content:center;

`

const Img = styled.img`
height:80%;
width:96%;
border-radius: 50px 50px 0px 50px;

`;
const Announcement = () => {
  return (
    <Container>
      <Img src="https://mediacdn.grabone.co.nz/asset/245jDlRR8j" alt="annucement" />
      {/* <img src={"./annucement.jpg"} alt="annucement" /> */}
    </Container>
  );
};

export default Announcement;
