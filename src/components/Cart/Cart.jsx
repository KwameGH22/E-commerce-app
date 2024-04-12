import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../data/ProductsContextProvider';
import { useContext } from 'react';
import './cart.css';


const Cart = () => {

    // this handles the navigation to the 
    // checkout page from the cart
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate("/checkout")
    }

    const { cartProducts, clearCart, removeFromCart, updateQuantity, getTotalCost } = useContext(ProductsContext);

  return (
    <section className='overlay bg-white'>
        <div className="cartContent mobile:mx-0 mobile:my-auto mobile:h-auto mobile:w-[90%] mobile:mt-[30px] mobile:rounded-lg mobile:p-5 mobile:top-[10%]">
            <div className='cartTop mobile:flex mobile:justify-between'>
                <h3 className='mobile:text-white mobile:text-lg mobile:font-bold tracking-wide'>Cart ({cartProducts.length})</h3>
                <button className='delete border-none bg-transparent text-base normal font-normal leading-6 underline-offset-auto opacity-50 ' onClick={clearCart}>Remove all</button>
            </div>
            
            {cartProducts.map((cartProduct) => (
                <div className="cartBottom text-white mt-5 flex gap-6">
                <img src={cartProduct.categoryImage.mobile} alt={cartProduct.name} className='cartImage w-[100px]'/>
                <div className='cartCenter mt-2.5'>
                    <h3>{cartProduct.name}</h3>
                    <h3>${cartProduct.price.toLocaleString()}</h3>
                </div>
                <div className='cartQty'>
                    <p onClick={() => updateQuantity(cartProduct.id, Math.max(0, cartProduct.quantity - 1))}>-</p>
                    <p>{cartProduct.quantity}</p>
                    <p onClick={() => updateQuantity(cartProduct.id, cartProduct.quantity + 1)}>+</p>
                </div>
            </div>))}

            <div className='cartTotal'>
                <h3>TOTAL</h3>
                <h3>${getTotalCost().toLocaleString()}</h3>
            </div>
            <div className='chkOutBtn'>
                <button onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    </section>
  )
}

export default Cart