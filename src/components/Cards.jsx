import React from "react";
import { Link } from "react-router-dom";
import CardHeadphone from './images/cardHeadphone.png';
import CardSpeaker from './images/cardSpeaker.png';
import CardEarphone from './images/cardEarphone.png';

const Cards = () => {
  return (
    <div className="cardWrapper mobile:flex mobile:flex-col tablet:flex w-full">
      <div className="headphonesCard relative mobile:text-center py-20 px-10 font-Manrope mobile:flex mobile:flex-col w-full">
        <div className="bg-[#F1F1F1] rounded-lg mobile:flex mobile:flex-col mobile:items-center justify-center  mobile:h-[217px] tablet:flex tablet:h-[204px]">
          <img
            src={CardHeadphone}
            alt="photo of headphone"
            className="mobile:h-30 mobile:w-28 tablet:h-44 tablet:w-44 absolute mt-5 mb-3 top-0"
          />
          <div className="text mobile:pt-16 tablet:pt-24">
            <p className="font-bold tracking-[1.07px] pb-2 laptop: pt-6">HEADPHONES</p>
            <div className="shoptext">
              <Link className="justify-center flex items-center gap-3">
                Shop<span className="text-[#d87d4a] text-[20px]"> &gt;</span>
              </Link>
            </div>
          </div>
        </div>

        
      </div>

      <div className="headphonesCard relative mobile:text-center py-20 px-10 font-Manrope mobile:flex mobile:flex-col w-full">
        <div className="bg-[#F1F1F1] rounded-lg mobile:flex mobile:flex-col mobile:items-center justify-center  mobile:h-[217px] tablet:flex tablet:h-[204px]">
          <img
            src={CardSpeaker}
            alt="photo of balck speaker"
            className="mobile:h-34 mobile:w-32 tablet:h-44 tablet:w-44 absolute mt-5 mb-3 top-0"
          />
          <div className="text mobile:pt-16 tablet:pt-24">
            <p className="font-bold tracking-[1.07px] pb-2 laptop: pt-6">SPEAKERS</p>
            <div className="shoptext">
              <Link className="justify-center flex items-center gap-3">
                Shop<span className="text-[#d87d4a] text-[20px]"> &gt;</span>
              </Link>
            </div>
          </div>
        </div>

        
      </div>

      <div className="headphonesCard relative mobile:text-center py-20 px-10 font-Manrope mobile:flex mobile:flex-col w-full">
        <div className="bg-[#F1F1F1] rounded-lg mobile:flex mobile:flex-col mobile:items-center justify-center  mobile:h-[217px] tablet:flex tablet:h-[204px]">
          <img
            src={CardEarphone}
            alt="photo of black earphones"
            className="mobile:h-34 mobile:w-32 tablet:h-44 tablet:w-44 absolute mt-5 mb-3 top-0"
          />
          <div className="text mobile:pt-16 tablet:pt-24">
            <p className="font-bold tracking-[1.07px] pb-2 laptop: pt-6">EARPHONES</p>
            <div className="shoptext">
              <Link className="justify-center flex items-center gap-3">
                Shop<span className="text-[#d87d4a] text-[20px]"> &gt;</span>
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Cards;
