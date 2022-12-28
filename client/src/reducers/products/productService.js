import axios from 'axios'

// const API_URL = 'http://localhost:5000/products'
const API_URL = 'https://saptak-ebuy-world.onrender.com/products'

const getAllProducts = async () => {
  
    const response = await axios.get(API_URL)
  
    return response.data
  }

const getProduct = async (productId) => {
  console.log('hello '+API_URL + '/'+ productId)

  const response = await axios.get(API_URL + '/'+ productId)

  // console.log(response.data)

  return response.data
}

const productSlice = {
  getAllProducts,
  getProduct,
  }
  
export default productSlice
  