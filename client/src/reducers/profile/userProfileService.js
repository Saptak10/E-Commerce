import axios from 'axios'

// const API_URL = 'http://localhost:5000/profile'
const API_URL = `${process.env.REACT_APP_BACKEND_API}/profile`

const getUserDetails = async (userData) => {
  // const response = await axios.get(API_URL, userData)

  // return response.data
  
  const response = await axios.get(API_URL)

  if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  
  return response.data
}

// const login = async (userData) => {
//   const response = await axios.post(API_URL + 'login', userData)

//   if(response.data){
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }

//   return response.data
// }

// const logout = () => {
//   localStorage.removeItem('user')
// }

const userProfileSlice = {
  getUserDetails,
  // logout,
  // login
}

export default userProfileSlice