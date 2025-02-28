import React from 'react'
import DrinkHero from './DrinkHero';
import FindPlace from './FindPlace';
import ResturentCard from '../common/ResturentCard';
import DrinkCarousel from './DrinkCarousel';
import Map from './Map';

function DrinkPage() {
  return (
    <>
    <DrinkHero/>
    <FindPlace/>
    <ResturentCard title='Popular restuarants in Lagos' />
    <DrinkCarousel/>
    <ResturentCard title='Resturants nearby' />
    <Map/>
    </>
  )
}

export default DrinkPage;