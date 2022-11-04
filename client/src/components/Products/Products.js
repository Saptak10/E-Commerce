import styled from "styled-components";
// import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    margin-left: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Products = ({products}) => {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;