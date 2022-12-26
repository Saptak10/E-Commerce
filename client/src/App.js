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
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { ShippingAddress } from './pages/ShippingAddress';
import Payment from './pages/Payment';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, reset } from './reducers/products/productSlice'

import { useEffect } from 'react';
import Order from './pages/Order';
import Wishlist from './pages/Wishlist';
// import PageNotFound from './pages/PageNotFound';

function App() {

  const dispatch = useDispatch()

  const { products, isError, message } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getProducts())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])


  return (
    <div className="App">
      <Router>
      <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            {products.map((item) => (
              <Route path={'product/'+item._id} element={<ProductDetails item={item} key={item.id} />} />
            ))}
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/cart/:id?' element={<Cart />} /> */}
            <Route path='/orders' element={<Order />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/address' element={<ShippingAddress />} />
            <Route path='/payment' element={<Payment />} />
            {/* <Route path='/checkout' element={<Checkout />} /> */}
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route element={<PageNotFound />} /> */}
          </Routes>
          {/* <PageNotFound /> */}
      <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;