import { Button, cn } from '@heroui/react'
import React, { useEffect, useState } from 'react'

const ResturentCard = ({title, isDark, api}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(api)
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            setData(jsonData)
        })
    }, [api])
  return (
    <>
    <section className={cn("bg-[#F5FAFF] p-10", isDark && "bg-black text-white")}>
        <div className='w-[100%] mx-auto'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-xl md:text-4xl mb-4 mt-4'>{title}</h2>
                <Button variant='outline' className="text-[#0E8BFF] text-sm lg:text-xl">
                    See More
                </Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                {data.map((mydata) =>(
                    <div key={mydata.id} className='relative'>

                        {isDark && (
                        <Button className="text-[#26395C] bg-white absolute top-2.5 lg:top-4 right-2.5 lg:right-4 font-bold" size="sm">
                        {mydata.date}
                        </Button>
                        )}

                        <img className='w-[400px] object-cover rounded-lg mb-3' src={mydata.img} alt="" />
                        <h2 className='font-semibold text-lg mb-2'>{mydata.title}</h2>
                        <p className={cn("text-sm text-gray-600 mb-1",isDark && "text-slate-100")}>{mydata.des}</p>
                        <p className={cn("text-sm text-gray-500",isDark && "text-slate-100")}>{mydata.tags}</p>
                        <Button color='primary' className='mt-3' radius='sm'>
                        {isDark ? "Book  Now" : "Reserve Now"}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default ResturentCard