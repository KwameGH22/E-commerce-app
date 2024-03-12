import React, { Children, createContext } from 'react';
import data from './data.json'

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    const yx1 = data.slice(0,1);
    console.log(yx1);


  return (
    <ProductsContext.Provider value={{yxl}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
