import React from 'react';
import BackButton from '../headphonesPageComponents/BackButton';
import { Link } from 'react-router-dom';

const DetailCard = ({details}) => {
  return (
    <div className="container font-Manrope">
      <div className="btn">
        <BackButton />
      </div>
      <div className="detailCard_wrapper mt-10 mx-10 ">
        <div
          className="headphone__wrapper mobile:flex mobile:flex-col mobile:gap-10 mobile:w-[327px]
                        tablet:flex tablet:gap-10 tablet:h-[480px] tablet:w-[689.5px] 
                        laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20"
        >
          <div
            className="image mobile:bg-mob-yx1
                            tablet:bg-tb-yx1 tablet:h-[480px] tablet:w-[281px]
                            laptop:bg-dt-yx1 bg-no-repeat bg-center bg-cover h-[352px] laptop:w-full laptop:h-[560px]"
          ></div>
          <div className="details tablet:mt- mobile:flex mobile:flex-col tablet:w-[339.5px] tablet:flex tablet:flex-col tablet:justify-center gap-4 
                          laptop:text-start laptop:mt-0 laptop:justify-center">
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">{details.name}</p>
              <p>HEADPHONES</p>
            </div>

            <div className="info text-[15px] laptop:px-0 ">
              <p className=" laptop:pr-20">
               {details.description}
              </p>
            </div>

            {/* price */}
            <div className="price text-[15px] font-bold">
              <p className=" tracking-[1.29px]">$ {details.price}</p>
            </div>

            {/* count */}
            <div className="wrap flex gap-3 mobile:items-center">
              <div className="count px-4 py-3 bg-[#F1F1F1] flex ">
                <span className=" font-bold cursor-pointer tracking-[1px]">
                  -
                </span>
                <button className=" px-4 font-extrabold">1</button>
                <span className=" font-bold cursor-pointer tracking-[1px]">
                  +
                </span>
              </div>

              {/* button */}
              <div className="btn">
                <Link>
                  <button
                    className="bg-[#D87D4A] mobile:text-[15px] laptop:hover:bg-[#FBAF85] text-white px-4 py-3 font-normal"
                    // onClick={}
                  >
                    ADD TO CART
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCard

