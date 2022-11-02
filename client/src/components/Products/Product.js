import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import { borderRadius } from "@mui/system";

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
    border-radius: 10px;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    border: 2px solid #f5fbfd;
    border-radius: 10px;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Details = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 100px;
    align-items: center;
    justify-content: center;
    position: relative;
    // border: 2px solid #ace3f5;
    // border-radius: 5px;
    padding-bottom: 20px;
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
    position: relative;
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

    const divStyles = {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: 10,
        margin: '1em',
      };

    const route = `/${item.name}`;

return (
    <div style={divStyles}>
    <Container>
    <Circle />
    <Image src={item.image} />
    <Info>
        <Icon>
            <AddShoppingCartIcon />
        </Icon>
        <Link to={route}>
            <Icon>
                <InfoIcon />
            </Icon>
        </Link>
        <Icon>
            <FavoriteBorderIcon />
        </Icon>
    </Info>
    </Container>
    <Details>
        <PriceBox>{item.name}</PriceBox>
        <PriceBox>Rs {item.price}</PriceBox>
    </Details>
    </div>
);
};

export default Product;