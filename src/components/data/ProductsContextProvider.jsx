import React, { createContext } from 'react';
import { useState } from 'react';
import data from './data.json'

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    
    // set the state for the cartContext
    const [cartProducts, setCartProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);


    //From Ann's code
    const addToCarts = (item) => {
        const existingItemIndex = cartProducts.findIndex(cartProduct => cartProduct.id === item.id);
        if (existingItemIndex !== -1) {
        // If the item is already in the cart, update its quantity
        const updatedCartItems = [...cartProducts];
        updatedCartItems[existingItemIndex].quantity += item.quantity;
        setCartProducts(updatedCartItems);
        } else {
        // If the item is not in the cart, add it as a new item
        setCartProducts([...cartProducts, item]);
        }
    };

    const handleAddToCart = (item) => {
        //Add the product with specified quantity to cart
        addToCarts({...item, quantity});
        setQuantity(1);
      };
    
      const handleIncrement = () => {
        // Increment quantity by 1
        setQuantity(quantity + 1); 
      };
    
      const handleDecrement = () => {
        // Decrement quantity by 1, but maintain state 1
        if (quantity > 1) {
          setQuantity(quantity - 1); 
        }
      };

    // create a function that adds items to the cart
    const addToCart = (item, quantity) => {
        // search for existing products in the cartProducts array
        const existingProduct = cartProducts.find((cartProduct) => cartProduct.id === item.id)

        if (existingProduct) {
            setCartProducts((prevCartProducts =>
                prevCartProducts.map((cartProduct) =>
                    cartProduct.id === item.id
                    ? {...cartProduct, quantity: cartProduct.quantity + quantity}
                    : cartProduct)
                )
            )
        } else {
            setCartProducts((prevCartProducts) => [...prevCartProducts, {...item, quantity}])
        }
    }

    // create a function to remove items from the cart
    const removeFromCart = (itemId) => {
        setCartProducts((prevCartProducts) => prevCartProducts.filter((cartProduct) => cartProduct.id !== itemId))
    }

    // create a function to delete items from the cart
    const clearCart = () => {
        setCartProducts([])
    }

    // create a function to update the
    // quantity of items in the cart
    const updateQuantity = (itemId, newQuantity) => {
        setCartProducts((prevCartProducts) =>
            prevCartProducts.map((cartProduct) =>
                cartProduct.id === itemId 
                ? {...cartProduct, quantity: newQuantity}
                : cartProduct
            )
        )  
    }

    // create a function to get the total
    // of items in the cart
    const getTotalCost = () => {
        return cartProducts.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const increase = (quantity) => {setQuantity(quantity + 1)}
  return (
    <ProductsContext.Provider value={{cartProducts, quantity,
        increase,
      addToCart,
      addToCarts,
      handleAddToCart,
      handleDecrement,
      handleIncrement,
      setQuantity,
      setCartProducts,
      removeFromCart,
      clearCart,
      updateQuantity,
      getTotalCost}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
