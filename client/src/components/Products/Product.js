import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const PriceBox = styled.h3`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #99ff99;
    position: relative;
    border-radius: 10px;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({ item }) => {
return (
    <div>
    <Container>
    <Circle />
    <Image src={item.img} />
    <Info>
        <Icon>
            <AddShoppingCartIcon />
        </Icon>
        <Icon>
            <Link to='/'><SearchIcon /></Link>
        </Icon>
        <Icon>
            <FavoriteBorderIcon />
        </Icon>
    </Info>
    </Container>
    <PriceBox>5 Star rating</PriceBox>
    <PriceBox>Rs {item.price}</PriceBox>
    </div>
);
};

export default Product;