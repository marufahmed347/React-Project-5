import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer'
import HomePage from './components/homepage/Index'
import MyNavbar from './components/Navbar'
import DrinkPage from './components/drinkpage/Drink';
import ClubPage from './components/clubpage/club';
import Payment from './components/paymentpage/Payment';
import Contact from './components/contactpage/Contact';


function App() {

  return (
    <>
      <Router>
        <MyNavbar/>

        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/drink' element={<DrinkPage/>}></Route>
          <Route path='/club' element={<ClubPage/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>

        <Footer/>
      </Router>
    </>
  )
}

export default App
