import React from "react";

const ZX7DetailFeature = () => {
  return (
    <div className="container font-Manrope">
      <div className="features mt-10 mx-10 mobile:w-[327px]">
        <h1 className=" mb-6 tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">
          FEATURES
        </h1>
        <div className="text-justify">
          <p>
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage. 
          </p>

          <p className="mt-6">
             The ZX7 speaker is the perfect blend of stylish design and high performance. It
            houses an encased MDF wooden enclosure which minimises acoustic
            resonance. Dual connectivity allows pairing through bluetooth or
            traditional optical and RCA input. Switch input sources and control
            volume at your finger tips with the included wireless remote. This
            versatile speaker is equipped to deliver an authentic listening
            experience.
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
            <span className="text-[#D87D4A] font-bold">2x</span>
            Speaker Unit
          </p>
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">2x</span>
            Speaker Cloth Panel
          </p>
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">1x</span>
            User Manual
          </p>
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">1x</span>
            3.5mm 7m Audio Cable
          </p>
          <p className="flex gap-3">
            <span className="text-[#D87D4A] font-bold">1x</span>
            7.5m Optical Cable
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZX7DetailFeature;
