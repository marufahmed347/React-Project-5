import React from 'react'
import { Autocomplete,AutocompleteItem,Button } from '@heroui/react'

function Hero() {
  return (
    <>
    <section className='bg-[url("/hero.png")] w-full h-[80vh] bg-no-repeat bg-cover mt-4 overflow-hidden mx-auto'>
        <div className='container w-[80%] mx-auto mt-10'>
            <h1 className='text-2xl lg:text-5xl w-full lg:w-[55%] font-bold py-5 px-5 lg:py-10 lg:px-10 mt-[18px] lg:mt-[30px] leading-tight text-white text-center lg:text-start'>Find amazing things to do anytime, anywhere in Lagos.</h1>

            <div className='bg-[#FBFCFF] w-full h-auto lg:w-[750px] lg:h-[150px] py-10 px-10 lg:ms-10 rounded-xl'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div>
                        <Autocomplete labelPlacement='outside' label='Location' placeholder='Oshodi' className='w-[100%]'>
                            <AutocompleteItem value='Oshodi' className='text-black'>Oshodi</AutocompleteItem>
                            <AutocompleteItem value='Hablu Programmer' className='text-black'>Hablu Programmer</AutocompleteItem>
                            <AutocompleteItem value='Stack Learner' className='text-black'>Stack Learner</AutocompleteItem>
                        </Autocomplete>
                    </div>
                    <div>
                        <Autocomplete labelPlacement='outside' label='Location' placeholder='Oshodi' className='w-[100%]'>
                            <AutocompleteItem value='Oshodi' className='text-black'>Oshodi</AutocompleteItem>
                            <AutocompleteItem value='Hablu Programmer' className='text-black'>Hablu Programmer</AutocompleteItem>
                            <AutocompleteItem value='Stack Learner' className='text-black'>Stack Learner</AutocompleteItem>
                        </Autocomplete>
                    </div>
                    <div>
                        <Autocomplete labelPlacement='outside' label='Location' placeholder='Oshodi' className='w-[100%]'>
                            <AutocompleteItem value='Oshodi' className='text-black'>Oshodi</AutocompleteItem>
                            <AutocompleteItem value='Hablu Programmer' className='text-black'>Hablu Programmer</AutocompleteItem>
                            <AutocompleteItem value='Stack Learner' className='text-black'>Stack Learner</AutocompleteItem>
                        </Autocomplete>
                    </div>

                    <div>
                        <Button color='primary' className='w-full p-8 mt-2'> Search</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero