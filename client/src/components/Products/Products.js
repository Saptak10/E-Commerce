import styled from "styled-components";
import Product from "./Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, reset } from '../../reducers/products/productSlice'

const Container = styled.div`
    padding: 20px;
    margin-left: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Products = () => {

  const dispatch = useDispatch()

  const { products, isError, message } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getProducts())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;