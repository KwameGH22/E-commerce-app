import React from "react";
import BackButton from "../headphonesPageComponents/BackButton";
import { Link } from "react-router-dom";

const ZX7DetailCard = () => {
  return (
    <div className="container font-Manrope">
      <div className="btn">
        <BackButton />
      </div>
      <div className="detailCard_wrapper mt-10 mx-10 mobile:w-[327px]">
        <div
          className="speaker__wrapper mobile:flex mobile:flex-col mobile:gap-10 
                        tablet:flex tablet:gap-10 tablet:h-[480px] tablet:w-[689.5px] 
                        laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20"
        >
          <div
            className="image bg-no-repeat bg-center bg-cover h-[352px]
                            mobile:bg-mob-zx7 
                            tablet:bg-tb-zx7 tablet:h-[480px] tablet:w-[281px]
                            laptop:bg-dt-zx7  laptop:w-full laptop:h-[560px]"
          ></div>
          <div
            className="details tablet:mt- mobile:flex mobile:flex-col tablet:w-[339.5px] tablet:flex tablet:flex-col tablet:justify-center gap-4 
                          laptop:text-start laptop:mt-0 laptop:justify-center"
          >
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">ZX7</p>
              <p>SPEAKER</p>
            </div>

            <div className="info text-[15px] laptop:px-0 ">
              <p className=" laptop:pr-20 ">
                Stream high quality sound wirelessly with minimal to no loss.
                The ZX7 speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
            </div>

            {/* price */}
            <div className="price text-[15px] font-bold">
              <p className=" tracking-[1.29px]">$ 3,500</p>
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
                    onClick={() => handleAddToCart(item.id)}
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
  );
};

export default ZX7DetailCard;
