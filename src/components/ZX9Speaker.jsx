import React from 'react'

const ZX9Speaker = () => {
  return (
    <div className='zx9Wrapper mx-auto w-[85%] h-[630px] rounded-lg bg-orange-500 -mt-50 relative'>
        <img src="" alt="" className="rings w-full" />
        <img src="../resources/assets/home/mobile/image-speaker-zx9.png" alt="" className="speaker absolute w-44 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
        <div className="zx9Content w-62 mx-auto">
            <h2 className='-mt-10 mb-4 text-white text-center text-4xl font-bold leading-10 tracking-wide'>ZX9 SPEAKER</h2>
            <p className='text-white text-center text-sm font-normal leading-6 mb-6'>
                Upgrade to premium speakers that
                are phenomenally built to deliver truly remarkable sound. 
            </p>
            <div className="zx9Btn w-40 h-12 mx-auto">
                <button className='border-none w-full h-full bg-black text-white text-xs font-bold tracking-wide'>SEE PRODUCT</button>
            </div>
        </div>
      
    </div>
  )
}

export default ZX9Speaker
