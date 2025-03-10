import React, { useState } from 'react'
import { Button, cn } from '@heroui/react';

const Carousel = ({isDark, data, tags}) => {

        

        const [currentIndex,setCurrentIndex]= useState(0);

        const handleDotClick = (index) => {
            setCurrentIndex(index)
        };
        const currentSlider = data[currentIndex];

        const handlePrev = () => {
            setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? data.length -1 : prevIndex -1
            );
        };

        const handleNext = () => {
            setCurrentIndex((prevIndex) => 
            prevIndex ===data.length -1 ? 0 : prevIndex +1
            );
        };

  return (
    <>
    <section className='overflow-hidden p-12'>
        

        <div className='relative w-full max-w-screen-2xl mx-auto'>
            <div className='flex items-center justify-between'>
                <button onClick={handlePrev} className={cn("absolute left-0 transform -translate-x-6 flex items-center justify-center  text-black rounded-full w-12 h-12",isDark && "text-white")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                </button>

                <div className='flex flex-col lg:flex-row items-center gap-6 w-full px-12'>
                    <div className='w-full lg:w-1/2'>
                        <h3 className={cn("text-3xl  font-semibold text-[#26395C] lg:ms-10 text-center lg:text-start",isDark && "text-white")}>
                          {isDark ? "Tonight In Lagos" : "Upcoming Eat & Drink Events"}
                        </h3>
                        <img className='object-cover w-full h-auto' src={currentSlider.image} alt="" />
                    </div>

                    <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                        <h2 className='text-2xl lg:text-5xl font-bold lg:w-[85%] leading-tight'>{currentSlider.heading}</h2>
                        <p className={cn("text-gray-700 lg:w-[70%] text-xl",isDark && "text-white")}>
                          {currentSlider.des}
                        </p>

                        <div className='grid grid-cols-2 lg:w-[60%]'>
                            {
                                tags.map((data,id)=>(
                                    <div key={id} className='flex items-center mt-5 mb-5'>
                                        <img src={data.img} alt="" />
                                        <p className='ms-2 text-lg font-semibold'>{data.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex items-center gap-4'>
                            <Button color='primary' variant={isDark ? "faded" : "bordered"} className={""} size='lg'>Add To Cart</Button>
                            <Button color='primary' size='lg'>Book Now</Button>
                        </div>

                        <div className='flex gap-4 mt-5'>
                            <p>Connect with us on:</p>

                            <div className='flex gap-3'>
                                <img src="Twitter.png" alt="" />
                                <img src="Instagram.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={handleNext} className={cn("absolute right-0 transform -translate-x-6 flex items-center justify-center  text-black rounded-full w-12 h-12",isDark && "text-white")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </button>
            </div>

            <div className='flex justify-center items-center gap-2 mt-6'>
                {data.map((_,index)=>(
                    <button key={index} onClick={()=> handleDotClick(index)} className={cn(
                      "w-3 h-3 rounded-full",
                      index === currentIndex
                        ? isDark
                          ? "bg-white"
                          : "bg-black"
                        : isDark
                        ? "bg-gray-600"
                        : "bg-gray-300"
                    )}></button>
                ))}
            </div>
        </div>
    </section>
    </>
  )  
}

export default Carousel;