import React from 'react';
import { Link } from 'react-router-dom';

const ZX9Speaker = ({details}) => {
  return (
    <div
      className="category_wrapper font-Manrope mx-10 my-10  h-[724px] mobile:flex mobile:flex-col mobile:gap-10 
                    laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20"
    >
      <div
        className="yx1_image mobile:bg-mob-zx9 bg-no-repeat bg-center bg-cover h-[352px] 
                    tablet:bg-tb-zx9 
                    laptop:bg-dt-zx9 laptop:w-full laptop:h-[560px]"
      ></div>
      <div
        className="xx99markii_textDetails_wrapper text-center  
                        mobile:flex mobile:flex-col 
                        tablet:mt-10 tablet:flex tablet:flex-col gap-8 
                        laptop:text-start laptop:mt-0 laptop:justify-center"
      >
        <div className="text-sm text-[#D87D4A]">
          <p className="tracking-">NEW PRODUCT</p>
        </div>
        <div
          className="name mobile:tracking-[1px] mobile:leading-[30px] 
                            tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold"
        >
          <p className="">{details.name}</p>
        </div>
        <div className="info text-[15px] px-2 tablet:px-16 laptop:px-0">
          <p className="laptop:pr-20">{details.description}</p>
        </div>
        <div className="button">
          <Link to="/ZX9">
            <button className="bg-[#D87D4A] laptop:hover:bg-[#FBAF85] text-white px-4 py-3 font-extrabold">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ZX9Speaker
