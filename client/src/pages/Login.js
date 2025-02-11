import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../reducers/user/userSlice'
import Spinner from '../components/Spinner/Spinner'

import { Button } from '@mui/material';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.user)

  useEffect(() => {
    if(isError){ 
      toast.error(message) 
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, 
    message, navigate, dispatch])

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword =()=>{
    if(passwordType==="password")
    {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(e.target)

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          Login
        </h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
