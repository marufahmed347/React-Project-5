import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'

function ResturentCard({title}) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("./data.json")
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            setData(jsonData)
        })
    }, [])
  return (
    <>
    <section className='bg-[#F5FAFF] p-10'>
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

                        <img className='w-[400px] object-cover rounded-lg mb-3' src={mydata.img} alt="" />
                        <h2 className='font-semibold text-lg mb-2'>{mydata.title}</h2>
                        <p className='text-sm text-gray-600 mb-1'>{mydata.des}</p>
                        <p className='text-sm text-gray-500'>{mydata.tags}</p>
                        <Button color='primary' className='mt-3' radius='sm'>
                        Reserve Now
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