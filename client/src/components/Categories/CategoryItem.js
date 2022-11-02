import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 7px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
  background: "white";
  color: ${props => props.primary ? "grey" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid white;
  border-radius: 3px;
`;

const CategoryItem = ({ item }) => {
  const divStyles = {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'grey',
  };
  
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button style={divStyles} primary><Link style={linkStyle} to={item.title}>SHOP NOW</Link></Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;