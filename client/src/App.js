import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ProductDetailsPage from './pages/ProductDetailsPage';
import {popularProducts} from './data'

function App() {

  // const productPage = `/${popularProducts[0].name}`;
  // console.log(productPage)

  return (
    <div className="App">
      <Router>
      <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            {popularProducts.map((item) => (
              <Route path={item.name} element={<ProductDetailsPage item={item} key={item.id} />} />
            ))}
            <Route path='/cart' element={<Cart />} />
            <Route path='/address' element={<Cart />} />
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