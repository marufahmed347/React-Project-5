import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer'
import HomePage from './components/homepage/Index'
import MyNavbar from './components/Navbar'
import DrinkPage from './components/drinkpage/Drink';
import ClubPage from './components/clubpage/club';
import Payment from './components/paymentpage/Payment';
import Contact from './components/contactpage/Contact';
import { Warper } from './components/common/Warper';


const App = () => {

  return (
    <>
      <Router>
        {/* <MyNavbar/> */}

        <Routes>
          <Route path='/' element={<Warper><HomePage/></Warper>}></Route>
          <Route path='/drink' element={<Warper><DrinkPage/></Warper>}></Route>
          <Route path='/club' element={<Warper isDark><ClubPage/></Warper>}></Route>
          <Route path='/payment' element={<Warper><Payment/></Warper>}></Route>
          <Route path='/contact' element={<Warper><Contact/></Warper>}></Route>
        </Routes>

        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
