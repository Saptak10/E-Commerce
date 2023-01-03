import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, reset } from './reducers/products/productSlice'

import { useEffect } from 'react';
import Order from './pages/Order';

function App() {

  const dispatch = useDispatch()

  const { products, isError, message } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getAllProducts())

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
            <Route path={'products/'+item._id} element={<ProductDetails item={item} key={item.id} />} />
          ))}
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;