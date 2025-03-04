import React from 'react'
import DrinkHero from './DrinkHero';
import FindPlace from './FindPlace';
import ResturentCard from '../common/ResturentCard';
import Carousel from '../common/CD-Carousel';
import Map from '../common/CD-Map';

function DrinkPage() {
  return (
    <>
    <DrinkHero/>
    <FindPlace/>
    <ResturentCard api='./data.json' title='Popular restuarants in Lagos' />
    <Carousel data={CarouselData} tags={TagData} />
    <ResturentCard api='./data.json' title='Resturants nearby' />
    <Map/>
    </>
  )
}

export default DrinkPage;


const CarouselData = [
  {
    id: 1,
    image: "/DrinkCarosel.png",
    heading:
      "GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 2,
    image: "/slider.png",
    heading: "Hablu Programmer Is The Best",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 3,
    image: "/man.png",
    heading: "We Learning Full Stack Web Development",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

const TagData = [
  {
    id: 1,
    img: "Calendar.png",
    title: "Dec 12 2024",
  },
  {
    id: 2,
    img: "Mark.png",
    title: "TBS  Lagos",
  },
  {
    id: 3,
    img: "Clock.png",
    title: "9:00 PM",
  },
  {
    id: 4,
    img: "Tag.png",
    title: "N20,000",
  },
];