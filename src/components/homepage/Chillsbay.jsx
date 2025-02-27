import React from 'react'

function Chillsbay() {

    const CardInfo = [
        {
          logo: "logo1.png",
          title: "Your  entire  trip in one checkout!",
          des: "Add multiple experiences to your cart and checkout on one click.",
        },
        {
          logo: "logo2.png",
          title: "Pay with Crypto on the go",
          des: "Enjoy the freedom of universal payments for a seamless marketplace experience",
        },
        {
          logo: "logo3.png",
          title: "Free Cancellation and ticket transfer",
          des: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
        },
      ];

  return (
    <>
    <section>
        <h1 className='text-center text-[#26395C] text-3xl lg:text-5xl mt-16 mb-10 font-semibold'>Why Use Chillsbay?</h1>

        <div className='container bg-[#189EFF0F] grid grid-cols-1 lg:grid-cols-3 mx-auto mt-10 mb-10 p-12 rounded-2xl shadow-xl'>
            {
                CardInfo.map((info,i)=>(
                    <div key={i} className='mt-10'>
                        <img className='w-fit mx-auto' src={info.logo} alt="" />

                        <div className='w-[85%] sm:w-[65%] mx-auto text-center'>
                            <h3 className='text-2xl sm:text-3xl font-bold mt-2 mb-2'>{info.title}</h3>
                            <p className='text-medium sm:text-lg'>{info.des}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default Chillsbay