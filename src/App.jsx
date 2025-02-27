import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer'
import HomePage from './components/homepage/Index'
import MyNavbar from './components/Navbar'
import DrinkPage from './components/drinkpage/Drink';
import ClubPage from './components/clubpage/club';


function App() {

  return (
    <>
      <Router>
        <MyNavbar/>

        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/drink' element={<DrinkPage/>}></Route>
          <Route path='/club' element={<ClubPage/>}></Route>
        </Routes>

        <Footer/>
      </Router>
    </>
  )
}

export default App
