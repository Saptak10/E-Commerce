import axios from 'axios'

const API_URL = '/'

const register = async (userData) => {
  const response = await axios.get(API_URL + 'register', userData)

  if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const login = async (userData) => {
  const response = await axios.get(API_URL + 'login', userData)

  if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const logout = () => {
  localStorage.removeItem('user')
}

const userSlice = {
  register,
  logout,
  login
}

export default userSlice