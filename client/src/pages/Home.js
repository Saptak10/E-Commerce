import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";

// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// import Slider from "../components/Slider/Slider";

import products from '../productsData'

const Home = () => {
//   const navigate = useNavigate()

//   const { user } = useSelector((state) => state.user)

//   useEffect(() => {

//     if (!user) {
//       navigate('/login')
//     }

//   }, [user, navigate])

  return (
    <div>
      {/* <Announcement /> */}
      {/* <Navbar /> */}
      {/* <Slider />*/}
      <h1>EBuy World</h1>
      <Categories /> 
      <Products products={products}/>
      {/* <Newsletter/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home