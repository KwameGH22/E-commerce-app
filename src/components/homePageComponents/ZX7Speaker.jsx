import React from "react";
import { Link } from "react-router-dom";

const ZX7Speaker = () => {
  return (
    <div className="container__wrapper font-Manrope flex flex-col justify-center h-[320px] 
                    mobile:mx-10 mobile:bg-mob-speaker-home mobile:bg-cover mobile:bg-center mobile:bg-no-repeat w-full mb-10 
                    tablet:bg-tb-speaker-home tablet:bg-cover tablet:bg-no-repeat tablet:bg-center 
                    laptop:bg-dt-speaker-home laptop:bg-cover laptop:bg-no-repeat laptop:bg-center laptop:mx-10">
        <div className="text flex flex-col justify-end mobile:px-5 gap-5 tablet:px-20">
          <div className="text-top text-[28px]  font-bold ">
            <p className="tracking-[-1px]">ZX7 SPEAKER</p>
          </div>
          <div className="btn">
            <Link to='/speakers'>
              <button className=" px-4 py-3 font-extrabold border-2 border-black mobile:tracking-[1px] tablet:tracking-[2px] laptop:hover:bg-[#000000] laptop:hover:text-[#FFFF]">SEE PRODUCT</button>
            </Link>
          </div>
        </div>
     </div>
  );
};

export default ZX7Speaker;
