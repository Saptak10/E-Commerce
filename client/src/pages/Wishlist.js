import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Product, ProductDetail, Image, Details, ProductName, ProductSize, Quantity, ClearText,
  PriceDetail, ProductAmountContainer, ProductPrice, Remove, Info,
  Top, TopButton, TopTexts, TopText, Bottom, } from "./Cart/CartStyle"

import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import { clearWishlist, removeFromWishlist } from '.././reducers/wishlist/wishlistSlice'
import { addToCart } from '.././reducers/cart/cartSlice'

const Wishlist = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const wishlist = useSelector((state) => state.wishlist);

  const { wishlistItems } = wishlist;

  const removeFromWishlistHandler = (product) => {
    dispatch(removeFromWishlist(product));
  };

  const clearWishlistHandler = () => {
    dispatch(clearWishlist());
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product));
    navigate('/cart')
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <Top>
        <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
        <TopTexts>
          <TopText>Total Items = {wishlistItems.length}</TopText>
        </TopTexts>
        <ClearText onClick={() => clearWishlistHandler()}>Clear Cart</ClearText>
      </Top>
      <Bottom>
        <Info>
        {wishlistItems.map((item) => (
          <div key={item._id}>
          <Product>
            <ProductDetail>
              <Image src={item.image} alt={item.name}/>
              <Details>
                <ProductName>
                  <b>{item.name}</b>
                </ProductName>
                <ProductSize>
                  <Remove onClick={() => removeFromWishlistHandler(item)}>
                    <DeleteForeverIcon/>
                  </Remove>
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Quantity style={{cursor: 'pointer'}} onClick={() => addToCartHandler(item)}>
                  <AddShoppingCartIcon />
                </Quantity>
                <ProductPrice>Rs {item.price}</ProductPrice>
              </ProductAmountContainer>
            </PriceDetail>
          </Product>
          </div>
        ))}
        </Info>
      </Bottom>
    </div>
  )
}

export default Wishlist