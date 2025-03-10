import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from './components/homepage/Index'
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
          <Route path='/' element={<Warper><HomePage/></Warper>}/>
          <Route path='/drink' element={<Warper><DrinkPage/></Warper>}/>
          <Route path='/club' element={<Warper isDark><ClubPage/></Warper>}/>
          <Route path='/payment' element={<Warper><Payment/></Warper>}/>
          <Route path='/contact' element={<Warper><Contact/></Warper>}/>
        </Routes>

        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
