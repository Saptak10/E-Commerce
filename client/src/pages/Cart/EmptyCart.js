import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div>
        <img 
        src='https://img.freepik.com/free-vector/add-cart-concept-illustration_114360-1435.jpg?w=740&t=st=1672779513~exp=1672780113~hmac=d39b2c0aee8f046091149b270e59c404ed1e5ced75c67e58f3145814f30c65a8'
        alt='Empty Cart'
        width='300px'/>
        <h3>Cart is empty</h3>
        <Link to='/' style={{textDecoration:'none'}}><Button variant="outlined">Go Shopping</Button></Link>
    </div>
  )
}

export default EmptyCart