import React from "react";

const XX59DetailFeature = () => {
  return (
    <div className="container font-Manrope">
      <div className="features mt-10 mx-10">
        <h1 className=" mb-6 tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">
          FEATURES
        </h1>
        <div className="text-justify">
          <p>
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos. 
          </p>

          <p className="mt-6">
            More than a simple pair of headphones, this headset features a pair of built-in
            microphones for clear, hands-free calling when paired with a
            compatible smartphone. Controlling music and calls is also intuitive
            thanks to easy-access touch buttons on the earcups. Regardless of
            how you use the XX59 headphones, you can do so all day thanks to an
            impressive 30-hour battery life that can be rapidly recharged via
            USB-C.
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

export default XX59DetailFeature;
