import React from "react";
import BackButton from "./BackButton";
import { Link } from "react-router-dom";
import { xx99mark2 } from "../data/Product4";
import { useContext } from "react";
import { ProductsContext } from "../data/ProductsContextProvider";

const XX99Mark2DetailCard = () => {
  const {cartProducts, setCartProducts, quantity, setQuantity, increase, addToCart, updateQuantity,addToCarts, handleAddToCart,handleIncrement, handleDecrement}= useContext(ProductsContext);
  console.log(cartProducts);

  const prodXX99mark2 = {
    name: xx99mark2.name,
    price: xx99mark2.price,
    quantity: quantity,
    cost: xx99mark2.price*quantity

  }

  const addItem = (xx99mark2) => {
    setCartProducts((prevState) => [...prevState, xx99mark2]);
    // alert(`${obj.quantity}, ${obj.name} has been added to your Cart` )
    console.log(xx99mark2);
   }

  const handleAddition = (xx99mark2) => {
    let isPresent = false;
    cartProducts.forEach((product) => {
      if (xx99mark2.id === product.id)
      isPresent = true;
    console.log(isPresent);
    });
    if (isPresent)
      return;
    setCartProducts([...cartProducts,xx99mark2])
  }

  const handleRemove = (id) => {
    const arr = cartProducts.filter((product) => product.id !==id);
    setCartProducts(arr)
  }

  return (
    <div className="container font-Manrope">
      <div className="btn">
        <BackButton />
      </div>
      <div className="detailCard_wrapper mt-10 mx-10 mobile:w-[327px] ">
        <div
          className="headphone__wrapper mobile:flex mobile:flex-col mobile:gap-10 
                        tablet:flex tablet:gap-10 tablet:h-[480px] tablet:w-[689.5px] 
                        laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20"
        >
          <div
            className="image mobile:bg-mob-xx99m2
                            tablet:bg-tb-xx99m2 tablet:h-[480px] tablet:w-[281px]
                            laptop:bg-dt-xx99m2 bg-no-repeat bg-center bg-cover h-[352px] laptop:w-[500px] laptop:h-[560px]"
          ></div>
          <div className="details tablet:mt- mobile:flex mobile:flex-col tablet:w-[339.5px] tablet:flex tablet:flex-col tablet:justify-center gap-4 
                          laptop:text-start laptop:mt-0 laptop:justify-center laptop:w-[500px]">
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">XX99 MARK II</p>
              {/* <p>HEADPHONES</p> */}
            </div>

            <div className="info text-[15px] laptop:px-0 ">
              <p className=" laptop:pr-20">
                {xx99mark2.description}
              </p>
            </div>

            {/* price */}
            <div className="price text-[15px] font-bold">
              <p className=" tracking-[1.29px]">$ {xx99mark2.price}</p>
            </div>

            {/* count */}
            <div className="wrap flex gap-3 mobile:items-center">
              <div className="count px-4 py-3 bg-[#F1F1F1] flex ">
                <button onClick={() => handleDecrement()} className=" font-bold cursor-pointer tracking-[1px]">
                  -
                </button>
                <span className=" px-4 font-extrabold">{quantity}</span>
                <button onClick={() => handleIncrement()} className=" font-bold cursor-pointer tracking-[1px]">
                  +
                </button>
              </div>

              {/* button */}
              <div className="btn">
                <Link>
                  <button
                    className="bg-[#D87D4A] mobile:text-[15px] laptop:hover:bg-[#FBAF85] text-white px-4 py-3 font-normal"
                    onClick={() => handleAddToCart(xx99mark2, quantity)}
                  >
                    ADD TO CART
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XX99Mark2DetailCard;
