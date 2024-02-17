import React from 'react'

const Hero = () => {
  return (
    <section className="heroWrapper font-Manrope">
        <div className="h-[670px] bg-hero-mobile bg-cover bg-no-repeat text-white relative">
            <div className="heroContent absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
                <h2 className='my-auto w-[250px] text-center text-sm font-normal tracking-widest mt-[10px]'>NEW PRODUCT</h2>
                <h1 className='mt-[20px] text-4xl font-bold tracking-wide leading-10 text-center'>XX99 MARK II HEADPHONES</h1>
                <p className="heroPara mt-5 w-82 text-center text-sm font-normal leading-6 opacity-75">
                    Experience natural, lifelike audio and exceptional 
                    build quality made for the passionate music enthusiast.
                </p>
                <button className="heroBtn border-none mt-12 bg-orange-500 text-white px-9 py-5 font-bold">SEE PRODUCT</button>
    

            </div>
        </div>
    </section>
  )
}

export default Hero
