import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
// import { mobile } from "../../components/responsive";
import {Container, Wrapper, Title, Top, TopButton, TopTexts, TopText, Bottom,Info, 
  Product, ProductDetail, Image, Details, ProductName, Quantity, ProductColor, 
  ProductSize, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, 
  Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button } from "./CartStyle"

const Cart = () => {

  const[count,setCount] = useState(1);
  const[count2,setCount2] = useState(1);

  // const[total,setTotal] = useState(0);

  const itemCount = 2;

  // setTotal(30*count+20*count2 + 40);

  return (
    <Container>
      {/* <Navbar />
      <Announcement /> */}
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({itemCount})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled"><Link to='/address' className='header-link-desktop'>CHECKOUT NOW</Link></TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Nike AIR</b> 
                  </ProductName>
                  <ProductSize>
                    <b>Size 37.5</b>
                    <ProductColor color="black" />
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Quantity>
                    <RemoveIcon onClick={() => setCount(count - 1)}/>
                    <ProductAmount>{count}</ProductAmount>
                    <AddIcon onClick={() => setCount(count + 1)}/>
                  </Quantity>
                  <ProductPrice>RS {30*count}</ProductPrice>
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Van Huesen</b>
                  </ProductName>
                  <ProductSize>
                    <b>Size M</b>
                    <ProductColor color="gray" />
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Quantity>
                    <RemoveIcon onClick={() => setCount2(count2 - 1)}/>
                    <ProductAmount>{count2}</ProductAmount>
                    <AddIcon onClick={() => setCount2(count2 + 1)}/>
                  </Quantity>
                  <ProductPrice>Rs {20*count2}</ProductPrice>
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs {30*count+20*count2}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Charge</SummaryItemText>
              <SummaryItemPrice>Rs 40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs {30*count+20*count2 + 40}</SummaryItemPrice>
            </SummaryItem>
            <Button><Link className='header-link-desktop' to='/address'>CHECKOUT NOW</Link></Button>
          </Summary>
        </Bottom>
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
};

export default Cart;