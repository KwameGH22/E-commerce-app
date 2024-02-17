import React from 'react'

const YX1Earphones = () => {

  return (
    <div className='yx1Wrapper font-Manrope bg-[#D87D4A] mobile:h-[]  tablet:flex tablet:justify-center mb-10'>
        <div className="inner__wrapper mobile:items-center mobile:py-10 flex flex-col 
                        tablet:py-8 laptop:flex-row tablet:items-center 
                        laptop:items-center laptop:justify-center laptop:gap-20 laptop:px-10">

          <div className="yx1img h-full">
            <img
              src="../resources/assets/home/mobile/image-speaker-zx9.png"
              alt=""
              className="mobile:w-[172.25px] mobile:mb-5  tablet:w-[197.27px] tablet:mb-5 laptop:w-[410.23px]"
            />
          </div>
          <div className="yx1Content">
              <h2 className=''>YX1 EARPHONES</h2>
              <div className="yx1btn"><button>SEE PRODUCT</button></div>
          </div>
        </div>
    </div>
  )
}

export default YX1Earphones
