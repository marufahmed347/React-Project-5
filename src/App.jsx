import './App.css'
import Carousel from './components/Carousel'
import Chillsbay from './components/Chillsbay'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import ImgSection from './components/ImgSection'
import MyNavbar from './components/Navbar'
import ThingsCard from './components/ThingsCard'

function App() {

  return (
    <>
      <MyNavbar/>
      <Hero/>
      <ImgSection/>
      <ThingsCard/>
      <Chillsbay/>
      <Carousel/>
      <Gallery/>
    </>
  )
}

export default App
