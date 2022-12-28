import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  display: flex;
  background-color: #E6E6E6;
  ${mobile({ flexDirection: "column" })}
`;

const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.7;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Container>
      <Center>
        <Logo>Checkout different products from below</Logo>
        <List>
          <ListItem><Link to='/'>Home</Link></ListItem>
          <ListItem><Link to='/'>Cart</Link></ListItem>
          <ListItem><Link to='/'>Man Fashion</Link></ListItem>
          <ListItem><Link to='/'>Woman Fashion</Link></ListItem>
          <ListItem><Link to='/'>Accessories</Link></ListItem>
          <ListItem><Link to='/'>Profile</Link></ListItem>
          <ListItem><Link to='/'>Orders</Link></ListItem>
          <ListItem><Link to='/'>Wishlist</Link></ListItem>
          <ListItem><Link to='/'>Checkout</Link></ListItem>
          <ListItem><Link to='/'>Terms</Link></ListItem>
        </List>
        <SocialContainer>
          <a href='https://www.linkedin.com/in/saptak-chakraborty/' rel="noreferrer" target='_blank'>
            <SocialIcon color="0A66C2">
              <LinkedInIcon />
            </SocialIcon>
          </a>
          <a href='https://github.com/Saptak10' rel="noreferrer" target='_blank'>
            <SocialIcon color="171515">
              <GitHubIcon />
            </SocialIcon>
          </a>
          <a href='https://www.facebook.com/Saptak10' rel="noreferrer" target='_blank'>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
          </a>
          <a href='https://www.instagram.com/saptak10/' rel="noreferrer" target='_blank'>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
          </a>
          <a href='https://twitter.com/Saptak1000' rel="noreferrer" target='_blank'>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
          </a>
        </SocialContainer>
        <h5>Developed by <a href='https://saptakportfolio.netlify.app/' style={{color:'#356B9B', textDecoration:'none'}} rel="noreferrer" target='_blank'>Saptak Chakraborty</a> © 2022</h5>
      </Center>
    </Container>
  );
};

export default Footer;