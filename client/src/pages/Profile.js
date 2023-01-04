import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner/Spinner'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';

import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails, reset } from '../reducers/profile/userProfileSlice'

import '../css/Profile.css'
import { Button } from '@mui/material';
import Order from './Order';

function Profile() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { profile,  isLoading, isError, message } = useSelector(
    (state) => state.profile
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (profile === 'No user') {
      navigate('/login')
    }

    dispatch(reset())
  }, [profile, isError, message, navigate, dispatch])

  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    age: '',
    gender: '',
    dob: '',
    mobile: 0,
    password: profile.password,
    password2: profile.password,
  })

  const [passwordType, setPasswordType] = useState("password");
  
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  const [password2Type, setPassword2Type] = useState("password");
  
  const togglePassword2 =()=>{
    if(password2Type==="password")
    {
     setPassword2Type("text")
     return;
    }
    setPassword2Type("password")
  }

  const { name, email, age, gender, dob, mobile, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      // const userData = {
      //   name,
      //   email,
      //   age,
      //   gender,
      //   dob,
      //   mobile,
      //   password,
      // }

      dispatch(getUserDetails())
    }
  }

  console.log(profile)

  if (isLoading) {
    return <Spinner />
  }

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: '#EBEFAE',
    boxShadow: '0 0 0 0',
    marginBottom: '20px',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Container maxWidth="lg">
      <section className='heading'>
        <h1>
        {profile.name}
        </h1>
      </section>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
          <section className='form'>
          <h1>
          Update your details
        </h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
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
              type='age'
              className='form-control'
              id='age'
              name='age'
              value={age}
              placeholder='Enter your age'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='gender'
              className='form-control'
              id='gender'
              name='gender'
              value={gender}
              placeholder='Enter your gender'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='dob'
              className='form-control'
              id='dob'
              name='dob'
              value={dob}
              placeholder='Enter your dob'
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
          <div className='form-group'>
            <input
              type={passwordType}
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
            <Button variant="text" onClick={togglePassword}>Show Password</Button>
          </div>
          <div className='form-group'>
            <input
              type={password2Type}
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
            <Button variant="text" onClick={togglePassword2}>Show Password</Button>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Order />
        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

export default Profile


// import React, { useState, useEffect } from 'react'
// import { Table, Form, Button, Row, Col } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import { getUserDetails, updateUserProfile } from '../actions/userActions'
// import { listMyOrders } from '../actions/orderActions'
// import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

// const ProfileScreen = ({ location, history }) => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [message, setMessage] = useState(null)

//   const dispatch = useDispatch()

//   const userDetails = useSelector((state) => state.userDetails)
//   const { loading, error, user } = userDetails

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
//   const { success } = userUpdateProfile

//   const orderListMy = useSelector((state) => state.orderListMy)
//   const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

//   useEffect(() => {
//     if (!userInfo) {
//       history.push('/login')
//     } else {
//       if (!user || !user.name || success) {
//         dispatch({ type: USER_UPDATE_PROFILE_RESET })
//         dispatch(getUserDetails('profile'))
//         dispatch(listMyOrders())
//       } else {
//         setName(user.name)
//         setEmail(user.email)
//       }
//     }
//   }, [dispatch, history, userInfo, user, success])

//   const submitHandler = (e) => {
//     e.preventDefault()
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match')
//     } else {
//       dispatch(updateUserProfile({ id: user._id, name, email, password }))
//     }
//   }

//   return (
//     <Row>
//       <Col md={3}>
//         <h2>User Profile</h2>
//         {message && <Message variant='danger'>{message}</Message>}
//         {}
//         {success && <Message variant='success'>Profile Updated</Message>}
//         {loading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant='danger'>{error}</Message>
//         ) : (
//           <Form onSubmit={submitHandler}>
//             <Form.Group controlId='name'>
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type='name'
//                 placeholder='Enter name'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId='email'>
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type='email'
//                 placeholder='Enter email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId='password'>
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type='password'
//                 placeholder='Enter password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId='confirmPassword'>
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type='password'
//                 placeholder='Confirm password'
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Button type='submit' variant='primary'>
//               Update
//             </Button>
//           </Form>
//         )}
//       </Col>
//       <Col md={9}>
//         <h2>My Orders</h2>
//         {loadingOrders ? (
//           <Loader />
//         ) : errorOrders ? (
//           <Message variant='danger'>{errorOrders}</Message>
//         ) : (
//           <Table striped bordered hover responsive className='table-sm'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>DATE</th>
//                 <th>TOTAL</th>
//                 <th>PAID</th>
//                 <th>DELIVERED</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order._id}</td>
//                   <td>{order.createdAt.substring(0, 10)}</td>
//                   <td>{order.totalPrice}</td>
//                   <td>
//                     {order.isPaid ? (
//                       order.paidAt.substring(0, 10)
//                     ) : (
//                       <i className='fas fa-times' style={{ color: 'red' }}></i>
//                     )}
//                   </td>
//                   <td>
//                     {order.isDelivered ? (
//                       order.deliveredAt.substring(0, 10)
//                     ) : (
//                       <i className='fas fa-times' style={{ color: 'red' }}></i>
//                     )}
//                   </td>
//                   <td>
//                     <LinkContainer to={`/order/${order._id}`}>
//                       <Button className='btn-sm' variant='light'>
//                         Details
//                       </Button>
//                     </LinkContainer>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </Col>
//     </Row>
//   )
// }

// export default ProfileScreen
