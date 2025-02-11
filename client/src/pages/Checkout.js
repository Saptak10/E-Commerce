import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset } from '../reducers/user/userSlice'
import Spinner from '../components/Spinner/Spinner'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import emailjs from "@emailjs/browser";

import { clearCart } from '../reducers/cart/cartSlice'

import { addToOrders } from '../reducers/order/orderSlice'

export const Checkout = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.user
  )

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  // const { cartItems, totalQuantity, totalAmount } = cart;

  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    mobile: user ? user.mobile : 0,
    address: user ? user.address : '',
    country: user ? user.country : '',
    city: user ? user.city : '',
    zipcode: user ? user.zipcode : 0,
  })

  const {name, email, mobile, address, country, city, zipcode } = formData

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!user) {
      navigate('/login')
    }

    if(!cartItems.length) {
      navigate('/cart')
    }

    dispatch(reset())
  }, [cartItems, user, isError, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  const USER_ID = process.env.REACT_APP_PUBLIC_KEY

  function checkoutHandler(e) {
    e.preventDefault();

    // if (process.env.NODE_ENV !== "development") {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
      });
    // }

    dispatch(addToOrders(cart));

    dispatch(clearCart());
    
    navigate('/orders')
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container maxWidth="md">
      <h1 className='heading'>
        Confirm your details
      </h1>
      <form onSubmit={checkoutHandler}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid item xs={5} >
                <h2>
                Profile details
                </h2>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    value={name}
                    placeholder='Enter the billing name'
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Enter your email'
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='mobile'
                    className='form-control'
                    id='mobile'
                    name='mobile'
                    value={mobile}
                    placeholder='Enter your mobile'
                    onChange={onChange}
                  />
                </div>
          </Grid>
          <Grid item xs={7}>
            <h2>
            Your shipping address
          </h2>
            <div className='form-group'>
              <input
                type='address'
                className='form-control'
                id='address'
                name='address'
                value={address}
                placeholder='Enter your Address'
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='country'
                className='form-control'
                id='country'
                name='country'
                value={country}
                placeholder='Enter your Country'
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='city'
                className='form-control'
                id='city'
                name='city'
                value={city}
                placeholder='Enter your City'
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='number'
                className='form-control'
                id='zipcode'
                name='zipcode'
                value={zipcode}
                placeholder='Enter your Zipcode'
                onChange={onChange}
              />
            </div>
          </Grid>
          {/* <div style={{display: 'none'}}>
              <h1>hello fren</h1>
          </div> */}
            <button type='submit' className='btn btn-block'>
                  Place Order
            </button>
        </Grid>
        </Box>
      </form> 
  </Container>
  );
};