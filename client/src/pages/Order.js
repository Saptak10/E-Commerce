import React from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Product, ProductDetail, Image, Details, ProductName, ProductSize, Quantity, ClearCartText,
  PriceDetail, ProductAmountContainer, ProductQuantity, ProductPrice, Remove } from "./Cart/CartStyle"

import { removeFromOrders, clearOrdersHistory } from '../reducers/order/orderSlice'

import { useSelector, useDispatch } from 'react-redux'

import '../css/Order.css'

const Order = () => {

  const dispatch = useDispatch()

  const order = useSelector((state) => state.order);

  const { orderItems } = order;

    const handleRemoveFromOrders = (order) => {
      dispatch(removeFromOrders(order));
    };

    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        <h2>
          Your order details 
        </h2>
          <Container maxWidth="lg" className='container'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">DATE (TIME)</TableCell>
                    <TableCell align="right">QUANTITY</TableCell>
                    <TableCell align="right">AMOUNT</TableCell>
                    <TableCell align="right">ACTIONS
                      <ClearCartText onClick={() => clearOrdersHistory()}>Clear Order History</ClearCartText>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
                
              {orderItems.map((row) => (
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <span style={{textAlign: 'left', width:'210px'}} >
                      {row.id}
                    </span>
                    <span style={{textAlign: 'center', width:'210px'}}>{row.date.split(', ')[0]} ({row.date.split(', ')[1]})</span>
                    <span style={{textAlign: 'right', width:'210px'}}>{row.totalQuantity}</span>
                    <span style={{textAlign: 'right', width:'210px'}}>{row.totalAmount}</span>
                    <span style={{textAlign: 'right', width:'210px'}}>
                      <Remove onClick={() => handleRemoveFromOrders(row)}>
                        <DeleteForeverIcon/>
                      </Remove>
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                  {row.cartItems.map((item) => (
                    <div key={item._id}>
                    <Product>
                      <ProductDetail>
                        <Image src={item.image} alt={item.name}/>
                        <Details>
                          <ProductName>
                            <b>{item.name}</b>
                          </ProductName>
                          <ProductSize>
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <Quantity>
                            <ProductQuantity>{item.productQuantity}</ProductQuantity>
                          </Quantity>
                          <ProductPrice>Rs {item.price * item.productQuantity}</ProductPrice>
                        </ProductAmountContainer>
                      </PriceDetail>
                    </Product>
                    </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </TableContainer>
          </Container>
    </div>
  )
}

export default Order