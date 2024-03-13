import React from 'react';
import { Link } from 'react-router-dom';

const XX59 = () => {
  return (
    <div className='wrapper font-Manrope mt-20'>
        <div className="xx59__wrapper mx-10 h-[724px] mobile:flex mobile:flex-col mobile:gap-10 
                        laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20 ">
            
            <div className="image mobile:bg-mob-xx59 tablet:bg-tb-xx59  laptop:bg-dt-xx59  bg-no-repeat bg-center bg-cover h-[352px] laptop:w-full laptop:h-[560px] ">
  
            </div>
  
            {/* text container */}
            <div className="details text-center tablet:mt-10 mobile:flex mobile:flex-col tablet:flex tablet:flex-col gap-8 laptop:text-start laptop:mt-0 laptop:justify-center">
              <div className="title text-[14px] text-[#D87D4A]">
                <p className=" tracking-[10px]">NEW PRODUCT</p>
              </div>
  
              <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
                <p className="">XX59 MARK</p>
                <p>HEADPHONES</p>
              </div>
  
              <div className="info text-[15px] px-2 tablet:px-16 laptop:px-0 ">
                <p className=" laptop:pr-20">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
              </div>
  
              {/* button */}
              <div className="btn">
                <Link to='/XX59'>
                  <button className="bg-[#D87D4A] laptop:hover:bg-[#FBAF85] text-white px-4 py-3 font-extrabold">SEE PRODUCT</button>
               </Link>
              </div>
  
            </div>
  
          </div>
      
    </div>
  )
}

export default XX59
