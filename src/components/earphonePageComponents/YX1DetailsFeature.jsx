import React from "react";
import {yx1} from '../data/Product1';

const YX1DetailsFeature = () => {
  return (
    <div className="container font-Manrope">
      <div className="features mt-10 mx-10 mobile:w-[327px]">
        <h1 className=" mb-6 tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">
          FEATURES
        </h1>
        <div className="text-justify">
          <p>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound. 
          </p>

          <p className="mt-6">
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.</p>
        </div>
      </div>
      {/*IN THE BOX*/}
      <div className="inTheBox mt-10 mx-10">
        <h1 className="tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">
          IN THE BOX
        </h1>
        <div className="items">
            {
                yx1.includes.map((include, index) => (<p className="flex gap-3"key={index}>
                    <span className="text-[#D87D4A] font-bold">{`${include.quantity}x`}</span>
                    {include.item}
                </p>))
            }
          {/* <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">{yx1.includes[0].quantity}x</span>
            {yx1.includes[0].item}
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
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default YX1DetailsFeature;
