import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import { mobile } from "../components/responsive";

import {useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Button from '@mui/material/Button';
import Rating from '../components/Products/Rating';

const Container = styled.div`
text-align: left;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  border: 2px solid #f5fbfd;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const ProductDetailsPage = ({ item }) => {

  const [size, setSize] = useState('');
  const[count,setCount] = useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };
  
  return (
        <Container>
            <Wrapper>
                <ImgContainer>
                <Image src={item.image} />
                </ImgContainer>
                <InfoContainer>
                <Title>{item.name}</Title>
                {/* <Desc>5 Star | 20 Reviews</Desc> */}
                <Desc><Rating value={item.rating} text={` | ${item.numReviews}`}/></Desc>
                <Desc>{item.description}</Desc>
                <Price>Rs {item.price}</Price>
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
                    <AmountContainer>
                    <RemoveIcon onClick={() => setCount(count - 1)}/>
                      <Amount>{count}</Amount>
                    <AddIcon onClick={() => setCount(count + 1)}/>
                    </AmountContainer>
                    {/* <Button>ADD TO CART</Button> */}
                    <Button variant="contained">ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
  );
};

export default ProductDetailsPage;