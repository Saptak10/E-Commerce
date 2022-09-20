import axios from 'axios'

const API_URL = '/'

const register = async (userData) => {
  const response = await axios.get(API_URL, userData)

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
  logout
}

export default userSlice