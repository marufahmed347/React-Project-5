import React from 'react'
import { cn } from '@heroui/react'

const Map = ({isDark}) => {
  return (
    <>
    <section className={cn("bg-[#F5FAFF] p-10 ", isDark && "bg-black")}>
        <div className='w-[100%] mx-auto'>
            <img className='w-full object-cover rounded-lg' src="map.png" alt="" />
        </div>
    </section>
    </>
  )
}

export default Map