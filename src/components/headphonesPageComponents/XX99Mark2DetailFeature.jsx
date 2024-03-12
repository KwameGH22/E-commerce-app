import React from "react";

const XX99Mark2DetailFeature = () => {
  return (
    <div className="container font-Manrope">
      <div className="features mt-10 mx-10 mobile:w-[327px] tablet:w-full">
        <h1 className=" mb-6 tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">
          FEATURES
        </h1>
        <div className="text-left">
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.{" "}
          </p>

          <p className="mt-6">
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hourbattery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
      </div>
      {/*IN THE BOX*/}
      <div className="inTheBox mt-10 mx-10 tablet:flex tablet:justify-between">
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
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">1x</span>
            Travel Bag
          </p>
        </div>
      </div>
    </div>
  );
};

export default XX99Mark2DetailFeature;
