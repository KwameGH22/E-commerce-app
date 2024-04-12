import React from "react";
import { useContext, useRef } from "react";
import { ProductsContext } from "../data/ProductsContextProvider";

const CartModal = ({onClose}) => {
    const {cartProducts, setCartProducts, quantity, setQuantity, increase, getTotalCost, updateQuantity, removeFromCart, clearCart}= useContext(ProductsContext);
    console.log(cartProducts);
    const modalRef = useRef();
    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }
  return (
    <section ref={modalRef} onClick={closeModal} className="overlay fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="cartContent mobile:mx-0 mobile:my-auto mobile:h-auto mobile:w-[90%] mobile:mt-[30px] mobile:rounded-lg mobile:p-5 mobile:top-[10%] mobile:bg-white  mobile:left-2
                        tablet:mx-0 tablet:my-auto tablet:w-[377px] tablet:h-[488px] tablet:bg-white tablet:rounded-lg tablet:top-[10%] tablet: tablet:">
        <div className="cartTop mobile:flex mobile:justify-between">
          <h3 className="mobile:text-white mobile:text-lg mobile:font-bold tracking-wide">
            Cart ({cartProducts.length})
          </h3>
          <button
            className="delete border-none bg-transparent text-base normal font-normal leading-6 underline-offset-auto opacity-50 "
            onClick={clearCart}
          >
            Remove all
          </button>
        </div>

        {cartProducts.map((cartProduct) => (
            
          <div className="" key={cartProduct.id}>
            <div className="cartBottom text-white mt-5 flex gap-6">
              <img
                src={cartProduct.categoryImage.mobile}
                alt={cartProduct.name}
                className="cartImage w-[100px]"
              />
              <div className="cartCenter mt-2.5">
                <h3 className="text-sm font-bold leading-6">{cartProduct.name}</h3>
                <h3 className="text-sm font-bold leading-6 opacity-50">${cartProduct.price.toLocaleString()}</h3>
              </div>
              <div className="cartQty bg-white flex gap-5 justify-center items-center w-[32%] h-[40px] mt-6 text-black">
                <p className="text-sm font-bold tracking-tighter opacity-25"
                  onClick={() => updateQuantity(cartProduct.id, Math.max(0, cartProduct.quantity - 1))}
                >
                  -
                </p>
                <p className="">{cartProduct.quantity}</p>
                <p className="text-sm font-bold tracking-tighter opacity-25"
                  onClick={() =>
                    updateQuantity(cartProduct.id, cartProduct.quantity + 1)
                  }
                >
                  +
                </p>
              </div>
            </div>
          </div>
        ))}
        

        <div className="cartTotal text-black mt-[30px] flex justify-between">
          <h3 className="text-sm font-normal leading-6 opacity-50">TOTAL</h3>
          <h3 className="text-[18px] font-bold">${getTotalCost()}</h3>
        </div>
        <div className="chkOutBtn mt-10 h-11">
          <button className="rounded-none w-[100%] h-[100%] bg-[#D87D4A] text-white text-sm font-bold tracking-wider" onClick>CHECKOUT</button>
        </div>
      </div>
    </section>
  );
};

export default CartModal;
