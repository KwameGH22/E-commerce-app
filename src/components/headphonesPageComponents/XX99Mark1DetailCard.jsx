import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import { ProductsContext } from "../data/ProductsContextProvider";
import { useContext } from "react";
import {xx99mark1} from '../data/Product3'

const XX99Mark1DetailCard = () => {

  const {cartProducts, setCartProducts, quantity, setQuantity, increase, addToCart, addToCarts, handleAddToCart, handleIncrement, handleDecrement}= useContext(ProductsContext);
  console.log(cartProducts);

  const prodMk1 = {
    name: xx99mark1.name,
    price: xx99mark1.price,
    quantity: quantity,
    cost: xx99mark1.price*quantity
    
  }
  const addProd = (prodMk1) => {
    const existingProduct = cartProducts.find((cartProduct) => cartProduct.name === prodMk1.name)
    if (existingProduct) {
            setCartProducts((prevCartProducts =>
                prevCartProducts.map((cartProduct) =>
                    cartProduct.name === prodMk1.name
                    ? {...cartProduct, quantity: cartProduct.quantity + quantity, cost: cartProduct.price*cartProduct.prodMk1.quantity}
                    : cartProduct)
                )
            )
        } else {
            setCartProducts((prevCartProducts) => [...prevCartProducts, {...prodMk1, quantity}])
        }
    // setCartProducts([...cartProducts, prodYX1]);
    alert(`${prodMk1.quantity} ${prodMk1.name} has been added to your Cart!`)
    setQuantity(1);
  }




  return (
    <div className="container font-Manrope">
      <div className="btn">
        <BackButton />
      </div>
      <div className="detailCard_wrapper mt-10 mx-10">
        <div
          className="headphone__wrapper mobile:flex mobile:flex-col mobile:gap-10 
                        tablet:flex tablet:gap-10 tablet:h-[480px] tablet:w-[689.5px] 
                        laptop:flex laptop:justify-between laptop:w-full laptop:h-[560px] laptop:gap-20"
        >
          <div
            className="image bg-no-repeat bg-center bg-cover h-[352px]
                            mobile:bg-mob-xx99m1 mobile:w-[327px]
                            tablet:bg-tb-xx99m1 tablet:h-[480px] tablet:w-[281px]
                            laptop:bg-dt-xx99m1  laptop:w-full laptop:h-[560px]"
          ></div>
          <div
            className="details tablet:mt- mobile:flex mobile:flex-col tablet:w-[339.5px] tablet:flex tablet:flex-col tablet:justify-center gap-4 
                          laptop:text-start laptop:mt-0 laptop:justify-center"
          >
            <div className="title text-[14px] text-[#D87D4A]">
              <p className=" tracking-[10px]">NEW PRODUCT</p>
            </div>

            <div className="name mobile:tracking-[1px] mobile:leading-[30px] tablet:leading-[44px] tablet:tracking-[1.43px] text-[28px] tablet:text-[40px] font-bold ">
              <p className="">{xx99mark1.name}</p>
              {/* <p>HEADPHONES</p> */}
            </div>

            <div className="info text-[15px] laptop:px-0 ">
              <p className=" laptop:pr-20 ">
                {xx99mark1.description}
              </p>
            </div>

            {/* price */}
            <div className="price text-[15px] font-bold">
              <p className=" tracking-[1.29px]">{xx99mark1.price}</p>
            </div>

            {/* count */}
            <div className="wrap flex gap-3 mobile:items-center">
              <div className="count px-4 py-3 bg-[#F1F1F1] flex ">
                <button onClick={() => {handleDecrement()}} className=" font-bold cursor-pointer tracking-[1px]">
                  -
                </button>
                <span className=" px-4 font-extrabold">{quantity}</span>
                <button onClick={()=>{handleIncrement()}} className=" font-bold cursor-pointer tracking-[1px]">
                  +
                </button>
              </div>

              {/* button */}
              <div className="btn">
                <Link>
                  <button
                    className="bg-[#D87D4A] mobile:text-[15px] laptop:hover:bg-[#FBAF85] text-white px-4 py-3 font-normal"
                    onClick={() => handleAddToCart(xx99mark1, quantity)}
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

export default XX99Mark1DetailCard;
