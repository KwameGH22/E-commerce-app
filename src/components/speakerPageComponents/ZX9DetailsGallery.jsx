import React from 'react'

const ZX9DetailsGallery = () => {
  return (
    <div className="gallery mt-20 mx-10 tablet:grid tablet:grid-cols-3 tablet:grid-rows-2 tablet:gap-4">
      <div
        className="gallery1 
                 mobile:bg-mob-gallery-zx9-1 mobile:h-[180px] mobile:bg-top mobile:bg-no-repeat mobile:bg-cover mobile:mb-5 mobile:rounded-lg
                 tablet:bg-tb-gallery-zx9-1 tablet:h-[180px] tablet:-bg-[20px] tablet:bg-no-repeat tablet:bg-cover tablet:mb-5 tablet:rounded-lg tablet:row-start-1 tablet:row-end-1"
      ></div>
      <div
        className="gallery2 mobile:bg-mob-gallery-zx9-2 mobile:h-[180px] mobile:bg-top mobile:bg-no-repeat mobile:bg-cover mobile:mb-5 mobile:rounded-lg
                 tablet:bg-tb-gallery-zx9-2 tablet:h-[180px] tablet:-bg-[20px] tablet:bg-no-repeat tablet:bg-cover  tablet:rounded-lg tablet:row-start-2 tablet:row-end-3"
      ></div>
      <div
        className="gallery3 mobile:bg-mob-gallery-zx9-3 mobile:h-[380px] mobile:bg-top mobile:bg-no-repeat mobile:bg-cover mobile:mb-5 mobile:rounded-lg
                 tablet:bg-tb-gallery-zx9-3 tablet:col-span-2 tablet:row-span-2 tablet:mb-5 tablet:rounded-lg "
      ></div>
    </div>
  )
}

export default ZX9DetailsGallery
