import React from "react";
import { Gadgets } from "../../resources/Products";
import { Link, useParams } from "react-router-dom";

const GadgetsPage = ({categories, productId}) => {
  const { category,  } = useParams();
  console.log(Gadgets);

  const selectedGadget = Gadgets.filter((item) => item.category === categories );
  console.log(selectedGadget);

  const reordered = [...selectedGadget].reverse();
  console.log(reordered);

  

  const gadgetList = reordered.map((element) => (
    <div key={element.id}
      className="category_wrapper font-Manrope mx-10 my-10  h-[724px] mobile:flex mobile:flex-col mobile:gap-10 
                    laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20"
    >
      {/* <div className="yx1_image mobile:bg-mob-yx1 bg-no-repeat bg-center bg-cover h-[352px] tablet:bg-tb-yx1 laptop:bg-dt-yx1 laptop:w-[500px] laptop:h-[560px]"></div> */}
      <div className="tablet:hidden desktop:hidden"><img src='./shared/mobile/image-xx99-mark-two-headphones.jpg' alt="mobile image" className="bg-no-repeat bg-center bg-cover h-[352px]" /></div>
      <div className="mobile:hidden desktop:hidden"><img src={element.categoryImage.tablet} alt="tablet image" className="bg-no-repeat bg-center bg-cover" /></div>
      <div className="mobile:hidden tablet:hidden"><img src={element.categoryImage.desktop} alt="desktop image" className="w-[500px] h-[560px]" /></div>
      <div
        className="xx99markii_textDetails_wrapper text-center  
                        mobile:flex mobile:flex-col 
                        tablet:mt-10 tablet:flex tablet:flex-col gap-8 
                        laptop:text-start laptop:mt-0 laptop:justify-center laptop:w-[400px]"
      >
        <div className="text-sm text-[#D87D4A]">
          <p className="tracking-">NEW PRODUCT</p>
        </div>
        <div
          className="name mobile:tracking-[1px] mobile:leading-[30px] 
                            tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold"
        >
          <p className="">{element.name}</p>
        </div>
        <div className="info text-[15px] px-2 tablet:px-16 laptop:px-0">
          <p className="laptop:pr-20">{element.description}</p>
        </div>
        <div className="button">
          <Link to={`/${productId}`}>
            <button className="bg-[#D87D4A] laptop:hover:bg-[#FBAF85] text-white px-4 py-3 font-extrabold">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="">
        <h1 className="text-white font-bold text-center">{category}</h1>
        <div className="">{gadgetList}</div>
    </div>
    
  );

  
};

export default GadgetsPage;
