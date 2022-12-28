import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { InputLabel, MenuItem, FormControl, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Container, Wrapper, ImgContainer, Image, InfoContainer, Title, Desc, Price, FilterContainer, 
  Filter, FilterTitle, FilterColor, AddContainer, AmountContainer, Amount } from "./ProductDetailsStyle"
import { useNavigate } from 'react-router-dom'
import Rating from '../../components/Products/Rating';
import Spinner from '../../components/Spinner/Spinner';

// import { useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux'
// import { getProduct, reset } from '../../reducers/products/productSlice'
import { useSelector } from 'react-redux'

const ProductDetails = ({ item }) => {

  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const { isLoading } = useSelector(
    (state) => state.products
  )
  // const { products, isError, message } = useSelector(
  //   (state) => state.products
  // )

  const [size, setSize] = useState('');
  const[quantity,setQuantity] = useState(1);

  const addToCartHandler = () => {
    // navigate(`/cart/${match.params.id}?qty=${quantity}`)
    navigate(`/cart`)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message)
  //   }

  //   dispatch(getProduct())

  //   return () => {
  //     dispatch(reset())
  //   }
  // }, [isError, message, dispatch])

  // console.log(products)
  
  if (isLoading) {
    return <Spinner />
  }

  return (
        <Container>
            <Wrapper>
                <ImgContainer>
                <Image src={item.image} />
                </ImgContainer>
                <InfoContainer>
                <Title>{item.name} {item.brand}</Title>
                {/* <Desc>5 Star | 20 Reviews</Desc> */}
                <Desc><Rating value={item.rating} text={` | ${item.numReviews}`}/></Desc>
                <Desc>{item.description}</Desc>
                <Price>Rs {item.price}</Price><Desc>( {item.countInStock > 0 ? `${item.countInStock} in Stock` : 'Out Of Stock'} )</Desc>
                <FilterContainer>
                    <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                    </Filter>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                      <InputLabel id="demo-simple-select-filled-label">Size</InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={size}
                        onChange={handleChange}
                        // autoWidth
                        label="Size"
                      >
                        <MenuItem value='S'>S</MenuItem>
                        <MenuItem value='M'>M</MenuItem>
                        <MenuItem value='L'>L</MenuItem>
                        <MenuItem value='XL'>XL</MenuItem>
                      </Select>
                    </FormControl>
                </FilterContainer>
                <AddContainer>
                    {item.countInStock > 0 && (
                      <AmountContainer>
                      <RemoveIcon onClick={() => setQuantity(quantity - 1)}/>
                        <Amount>{quantity}</Amount>
                      <AddIcon onClick={() => setQuantity(quantity + 1)}/>
                      </AmountContainer>
                    )}
                    {item.countInStock > 0 && quantity <= item.countInStock ? 
                    <Button onClick={addToCartHandler} variant="contained">ADD TO CART</Button> 
                    :
                    <Button variant="contained" disabled>ADD TO CART</Button>
                    }
                    
                </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
  );
};

export default ProductDetails;