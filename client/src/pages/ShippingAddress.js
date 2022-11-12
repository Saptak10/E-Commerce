import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../reducers/user/userSlice'
import Spinner from '../components/Spinner/Spinner'

export const ShippingAddress = () => {

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    country: '',
    city: '',
    zipcode: '',
  })

  const { name, address, country, city, zipcode } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.user
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(reset())
  }, [user, isError, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name,
      address,
      country,
      city,
      zipcode,
    }

      dispatch(register(userData))
    }

  if (isLoading) {
    return <Spinner />
  }

  return (
    // <Container>
    <>
        <section className='heading'>
          <h1>
            Shipping Address
          </h1>
        </section>
        {/* <form>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            // border: '1px solid grey',
          }}
          noValidate
          autoComplete="off"
          >
          <TextField id="outlined-basic" label="Billing Name" variant="outlined" />
          <TextField id="outlined-basic" label="Address" variant="outlined" />
          <TextField id="outlined-basic" label="Country" variant="outlined" />
          <TextField id="outlined-basic" label="City" variant="outlined" />
          <TextField id="outlined-basic" label="Zipcode" variant="outlined" />
        </Box>
        <div className='form-group' maxWidth="sm">
            <button  type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form> */}

<section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter the billing Name'
              onChange={onChange}
            />
          </div>
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
              type='zipcode'
              className='form-control'
              id='zipcode'
              name='zipcode'
              value={zipcode}
              placeholder='Enter your Zipcode'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Go for payment
            </button>
          </div>
        </form>
      </section>
        <section className='heading'>
          <h3>
            Fill in the shipping details
          </h3>
        </section>
        </>
    // </Container>
  )
}
 