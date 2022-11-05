import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { ShippingAddress } from './pages/ShippingAddress';
import Account from './pages/Account';
import Payment from './pages/Payment';
import axios from 'axios'

// import products from "./productsData";

import { useEffect, useState } from 'react';

function App() {

  const [products, setAllProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async() => {
      const { data } = await axios.get(`https://saptak-e-commerce.herokuapp.com/products`)

      setAllProducts(data)
    }

    fetchProduct()
  }, [])


  return (
    <div className="App">
      <Router>
      <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            {products.map((item) => (
              <Route path={'product/'+item._id} element={<ProductDetailsPage item={item} key={item.id} />} />
            ))}
            <Route path='/cart' element={<Cart />} />
            <Route path='/address' element={<ShippingAddress />} />
            <Route path='/account' element={<Account />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/checkout' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;