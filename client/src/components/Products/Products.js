import styled from "styled-components";
import Product from "./Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, reset } from '../../reducers/products/productSlice'
import Spinner from '../Spinner/Spinner'

const Container = styled.div`
    padding: 20px;
    margin-left: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Products = () => {

  const dispatch = useDispatch()

  const { products, isError, isLoading, message } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getAllProducts())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;