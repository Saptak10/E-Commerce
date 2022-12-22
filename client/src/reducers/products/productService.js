import axios from 'axios'

// const API_URL = 'http://localhost:5000/products'
const API_URL = 'https://saptak-ebuy-world.onrender.com/products'

const getProducts = async (token) => {
  
    const response = await axios.get(API_URL)
  
    return response.data
  }

const productSlice = {
    getProducts,
  }
  
export default productSlice
  