import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
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
