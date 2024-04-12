import React from "react";

const ZX9DetailFeature = () => {
  return (
    <div className="container font-Manrope">
      <div className="features mt-10 mx-10 mobile:w-[327px]">
        <h1 className=" mb-6 tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">
          FEATURES
        </h1>
        <div className="text-justify">
          <p>
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m). 
          </p>

          <p className="mt-6">
            Discover clear, more natural sounding highs than the competition with ZX9’s
            signature planar diaphragm tweeter. Equally important is its
            powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass
            unit. You’ll be able to enjoy equal sound quality whether in a large
            room or small den. Furthermore, you will experience new sensations
            from old songs since it can respond to even the subtle waveforms.
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

export default ZX9DetailFeature;
