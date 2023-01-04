import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import Rating from "./Rating";

import {Container, Info, Image, Details, PriceBox, Circle, Icon } from "./ProductStyle"

import { useDispatch } from 'react-redux'
// import { getProduct } from '../../reducers/products/productSlice'
import { addToCart } from '../../reducers/cart/cartSlice'

const Product = ({ item }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const divStyles = {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: 10,
        margin: '1em',
      };

    const route = `products/${item._id}`;

    const addToCartHandler = (product) => {
        console.log(product)
        dispatch(addToCart(product))
        navigate('/cart')
    }

return (
    <div style={divStyles}>
    <Container>
    <Circle />
    <Image src={item.image} />
    <Info>
        <Icon onClick={() => addToCartHandler(item)}>
            <AddShoppingCartIcon />
        </Icon>
        <Link to={route}>
        {/* <Link to={route} onClick={() => dispatch(getProduct(item._id))}> */}
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
        <PriceBox>Rs {item.price} <Rating value={item.rating} text={` | ${item.numReviews}`} /></PriceBox>
    </Details>
    </div>
);
};

export default Product;