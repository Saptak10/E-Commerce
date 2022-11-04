import styled from "styled-components";
// import { popularProducts } from "../../data";
import Product from "./Product";
// import products from '../../productsData'
import { useEffect, useState } from "react";
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    margin-left: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Products = () => {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async() => {
      const { data } = await axios.get('http://localhost:5000/products')

      setAllProducts(data)

      console.log("hello")
    }

    fetchProducts()

    console.log("hello")

  }, [])

  return (
    <Container>
      {allProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;