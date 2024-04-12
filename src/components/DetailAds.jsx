import React from 'react'

const DetailAds = () => {
  return (
    <div
      className="ads mobile:flex mobile:flex-col mobile:mb-[150px] font-Manrope
                    tablet:mt-[50px] tablet:mb-[150px] tablet:flex tablet:flex-col tablet:mx-10
                    laptop:mt-[50px] laptop:mb-[150px] laptop:flex laptop:flex-col laptop:"
    >
      <h3
        className="mobile:mx-0 mobile:my-auto mobile:text-2xl mobile:font-bold mobile:text-center
                    tablet: mx-0 tablet:my-auto tablet:text-2xl tablet:font-bold tablet:leading-[36px] tablet:tracking-[0.857px] tablet:text-center
                    laptop:  laptop:my-auto laptop:text-2xl laptop:font-bold laptop:leading-[36px] laptop:tracking-[0.857px] laptop:text-center"
      >
        YOU MAY ALSO LIKE
      </h3>
      <div
        className="recommendedContent mobile:mx-10 mobile:flex mobile:flex-col mobile:gap-3.5
                        tablet:flex tablet:gap-3.5
                        laptop:flex laptop:flex-wrap laptop:justify-between laptop:
      "
      >
        {/* ITEM1 */}
        <div className="recommendedItem1">
          <div
            className="recommendedImages mobile:bg-mob-xx99m2 mobile:h-[250px] mobile:mt-[50px] mobile:bg-no-repeat mobile:bg-center mobile:bg-cover
          tablet:bg-tb-xx99m1 tablet:h-[350px] tablet:w-[220px] tablet:bg-center tablet:bg-no-repeat tablet:bg-cover tablet:mt-[30px] tablet:rounded-lg
          laptop:bg-dt-xx99m1 laptop:h-[318px] laptop:w-[300px] laptop:bg-center laptop:bg-no-repeat laptop:bg-cover laptop:mt-[30px] laptop:rounded-lg"
          ></div>
          <div className="recommendedDetails laptop:p-2.5 laptop:text-center">
            <div
              className="recommendedName mobile:mt-[10px] mobile:mb-5 mobile:text-center mobile:text-2xl mobile:font-bold mobile:tracking-[1.714px]
                            tablet:mt-2.5 tablet:text-center tablet:text-2xl tablet:font-bold tablet:tracking-[1.714px] tablet:mb-5"
            >
              XX99MARKII
            </div>
            <Link>
              <button
                className="recommendedBtn mobile:border-none mobile:bg-[#D87D4A] mobile:text-[#fff] mobile:px-3 mobile:py-5 mobile:text-sm mobile:font-bold mobile:tracking-[1px] mobile:ml-[30%] mobile:mb-5
                                tablet:border-none tablet:mx-0 tablet:my-auto tablet:bg-[#D87D4A] tablet:text-[#fff] tablet:px-3 tablet:py-5 tablet:text-xs tablet:font-bold tablet:tracking-[1px] tablet:mb-5 tablet:ml-[18%]"
              >
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        {/*ITEM2 */}
        <div className="recommendedItem2">
          <div
            className="recommendedImages mobile:bg-mob-xx59 mobile:h-[250px] mobile:mt-[50px] mobile:bg-no-repeat mobile:bg-center mobile:bg-cover
                         tablet:bg-tb-xx59 tablet:h-[350px] tablet:w-[220px] tablet:bg-center tablet:bg-no-repeat tablet:bg-cover tablet:mt-[30px] tablet:rounded-lg
                         laptop:bg-dt-xx59 laptop:h-[318px] laptop:w-[300px] laptop:bg-center laptop:bg-no-repeat laptop:bg-cover laptop:mt-[30px] laptop:rounded-lg"
          ></div>
          <div className="recommendedDetails">
            <div
              className="recommendedName mobile:mt-[10px] mobile:mb-5 mobile:text-center mobile:text-2xl mobile:font-bold mobile:tracking-[1.714px]
                            tablet:mt-2.5 tablet:text-center tablet:text-2xl tablet:font-bold tablet:tracking-[1.714px] tablet:mb-5"
            >
              XX59
            </div>
            <Link>
              <button
                className="recommendedBtn mobile:border-none mobile:bg-[#D87D4A] mobile:text-[#fff] mobile:px-3 mobile:py-5 mobile:text-sm mobile:font-bold mobile:tracking-[1px] mobile:ml-[30%] mobile:mb-5
                                tablet:border-none tablet:mx-0 tablet:my-auto tablet:bg-[#D87D4A] tablet:text-[#fff] tablet:px-3 tablet:py-5 tablet:text-xs tablet:font-bold tablet:tracking-[1px] tablet:mb-5 tablet:ml-[18%]"
              >
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        {/* ITEM3 */}
        <div className="recommendedItem3">
          <div
            className="recommendedImages mobile:bg-mob-zx9speaker mobile:h-[250px] mobile:mt-[50px] mobile:bg-no-repeat mobile:bg-center mobile:bg-cover
                         tablet:bg-tb-zx9speaker tablet:h-[350px] tablet:w-[220px] tablet:bg-center tablet:bg-no-repeat tablet:bg-cover tablet:mt-[30px] tablet:rounded-lg
                         laptop:bg-dt-zx9speaker laptop:h-[318px] laptop:w-[300px] laptop:bg-center laptop:bg-no-repeat laptop:bg-cover laptop:mt-[30px] laptop:rounded-lg"
          ></div>
          <div className="recommendedDetails">
            <div
              className="recommendedName mobile:mt-[10px] mobile:mb-5 mobile:text-center mobile:text-2xl mobile:font-bold mobile:tracking-[1.714px]
                            tablet:mt-2.5 tablet:text-center tablet:text-2xl tablet:font-bold tablet:tracking-[1.714px] tablet:mb-5"
            >
              ZX9 SPEAKER
            </div>
            <Link>
              <button
                className="recommendedBtn mobile:border-none mobile:bg-[#D87D4A] mobile:text-[#fff] mobile:px-3 mobile:py-5 mobile:text-sm mobile:font-bold mobile:tracking-[1px] mobile:ml-[30%] mobile:mb-5
                                tablet:border-none tablet:mx-0 tablet:my-auto tablet:bg-[#D87D4A] tablet:text-[#fff] tablet:px-3 tablet:py-5 tablet:text-xs tablet:font-bold tablet:tracking-[1px] tablet:mb-5 tablet:ml-[18%]"
              >
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailAds
