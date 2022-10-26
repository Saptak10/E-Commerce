import Categories from "../components/Categories/Categories";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";

// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import Products from "../components/Products/Products";
// import Slider from "../components/Slider/Slider";

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
      <h1>Ebuy-World App</h1>
      <Categories /> 
      <Products/>
      {/* <Newsletter/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home