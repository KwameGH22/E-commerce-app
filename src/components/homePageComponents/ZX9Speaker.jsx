import React from 'react';
import { Link } from 'react-router-dom';

const ZX9Speaker = () => {
  return (
    // <div className='zx9Wrapper mx-auto  h-[630px] rounded-lg bg-orange-500 -mt-50 relative'>
        
    //     <img src="../resources/assets/home/mobile/image-speaker-zx9.png" alt="" className="speaker absolute w-44 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    //     <div className="zx9Content w-62 mx-auto">
    //         <h2 className='-mt-10 mb-4 text-white text-center text-4xl font-bold leading-10 tracking-wide'>ZX9 SPEAKER</h2>
    //         <p className='text-white text-center text-sm font-normal leading-6 mb-6'>
    //             Upgrade to premium speakers that
    //             are phenomenally built to deliver truly remarkable sound. 
    //         </p>
    //         <div className="zx9Btn w-40 h-12 mx-auto">
    //             <button className='border-none w-full h-full bg-black text-white text-xs font-bold tracking-wide'>SEE PRODUCT</button>
    //         </div>
    //     </div>
      
    // </div>
    <div className="ad__wrapper  font-Manrope bg-[#D87D4A] mobile:h-[]  tablet:flex tablet:justify-center mb-10 mx-10">
          <div className="inner__wrapper mobile:items-center mobile:py-10 flex flex-col tablet:py-8 laptop:flex-row tablet:items-center laptop:items-center laptop:justify-center laptop:gap-20 laptop:px-10 ">
           {/* Speaker image */}
            <div className="speaker__content h-full">
              <img src="../resources/assets/home/mobile/image-speaker-zx9.png" alt="" className="  mobile:w-[172.25px] mobile:mb-5  tablet:w-[197.27px] tablet:mb-5 laptop:w-[410.23px]"/>
            </div>

            {/* text content */}
              <div className="text__content text-white text-center laptop:text-start">
                <div className="text">
                  <div className="top__header mobile:text-[36px] mobile:font-bold mobile:tracking-[1.29px] mobile:leading-9 mobile:mb-5 tablet:text-[56px] tablet:leading-[1em] tablet:font-bold tablet:mb-5 laptop:tracking-[2px]">
                    <div className="p">ZX9</div>
                    <div className="p">SPEAKER</div>
                  </div>
                <div className=" text-[15px] mobile:mb-8 mobile:px-3 tablet:text-wrap tablet:mb-8 tablet:px-44 laptop:px-0">Upgrade to premium speakers that are <br /> phenomenally built to deliver truely remarkable <br className="mobile:hidden" /> sound</div>
                </div>
                {/* product button */}
                <div className="btn">
                <Link to='/speakers'>
                  <button className="bg-[#000000] text-white px-4 py-3 font-extrabold laptop:hover:bg-[#4c4c4c]">SEE PRODUCT</button>
                </Link>
                </div>
            </div>
        </div> 
      
      </div>
  )
}

export default ZX9Speaker
