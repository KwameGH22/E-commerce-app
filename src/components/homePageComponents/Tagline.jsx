import React from "react";

const Tagline = () => {
  return (
    // <div className="tagline_wrapper font-Manrope mobile:h-[698px] mobile:flex mobile:flex-col tablet:h-[633px] mobile:gap-10 tablet:flex
    //                 tablet:flex-col tablet:text-center tablet:gap-10
    //                 laptop:w-full laptop:h-[588px] laptop:flex ">

    //   <div className="text mobile:text-center mobile:flex mobile:flex-col gap-8 tablet:flex tablet:flex-col laptop:flex laptop:flex-col laptop:h-[295px] laptop:w-[455px] ">
    //     <div className="top__text mobile:text-[28px] tablet:text-[40px] tablet:px-11 tab font-bold mobile:px-2 laptop:text-[40px] laptop:p-0">
    //       <p className="mobile:tracking-[1px] tablet:tracking-[1.43pxpx]">BRINGING YOU THE <span className="text-[#D87D4A] ">BEST</span> AUDIO GEAR</p>
    //     </div>
    //     <div className="bottom__text text-[15px] font-medium tablet:px-16 ">
    //       <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    //     </div>
    //   </div>
    //   <div className="tagline_image mobile:h-[300px] mobile:bg-mob-gear-home mobile:bg-no-repeat mobile:bg-cover mobile:bg-center
    //                   tablet:h-[300px] tablet:bg-tb-gear-home tablet:bg-no-repeat tablet:bg-cover tablet:bg-center
    //                   laptop:h-[588px] laptop:w-[500px] laptop:bg-dt-gear-home ">

    //   </div>
    // </div>

    <div
      className="tagline_wrapper mx-10 my-10 h-[724px] mobile:flex mobile:flex-col mobile:gap-10 
                    laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20"
    >
      <div className="tagline_image mobile:bg-mob-gear-home bg-no-repeat bg-center bg-cover h-[352px] tablet:bg-tb-gear-home laptop:bg-dt-gear-home laptop:w-[500px] laptop:h-[560px]"></div>
      <div
        className="xx99markii_textDetails_wrapper text-center  
                        mobile:flex mobile:flex-col 
                        tablet:mt-10 tablet:flex tablet:flex-col gap-8 
                        laptop:text-start laptop:mt-0 laptop:justify-center laptop:w-[400px]"
      >
        <div className="laptop laptop:w-[400px]">
          <div className="top__text mobile:text-[28px] tablet:text-[40px] tablet:px-11 tab font-bold mobile:px-2 laptop:text-[40px] laptop:p-0 ">
            <p className="mobile:tracking-[1px] tablet:tracking-[1.43pxpx]">
              BRINGING YOU THE <br className="mobile:hidden" />
              <span className="text-[#D87D4A] ">BEST</span> AUDIO GEAR
            </p>
          </div>
          <div className="bottom__text text-gray-600 text-[15px]  tablet:px-16 laptop:p-0 laptop:text-wrap ">
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Tagline;
