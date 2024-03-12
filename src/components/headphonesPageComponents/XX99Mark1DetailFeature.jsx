import React from "react";

const XX99Mark1DetailFeature = () => {
  return (
    <div className="container font-Manrope">
      <div className="features mt-10 mx-10">
        <h1 className=" mb-6 tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">
          FEATURES
        </h1>
        <div className="text-justify">
          <p>
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz. 
          </p>

          <p className="mt-6">
            From the handcrafted microfiber ear cushions to the robust metal headband
            with inner damping element, the components work together to deliver
            comfort and uncompromising sound. Its closed-back design delivers up
            to 27 dB of passive noise cancellation, reducing resonance by
            reflecting sound to a dedicated absorber. For connectivity, a
            specially tuned cable is included with a balanced gold connector.
          </p>
        </div>
      </div>
      {/*IN THE BOX*/}
      <div className="inTheBox mt-10 mx-10">
        <h1 className="tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">
          IN THE BOX
        </h1>
        <div className="items">
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">1x</span>
            Headphone Unit
          </p>
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">2x</span>
            Replacement Earcups
          </p>
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">1x</span>
            User Manual
          </p>
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">1x</span>
            3.5mm 5m Audio Cable
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default XX99Mark1DetailFeature;
