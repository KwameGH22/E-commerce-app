import React from 'react';
import NavBar from '../components/homePageComponents/NavBar';
import { Outlet } from 'react-router-dom';
import FooterSection from '../components/homePageComponents/FooterSection';
import { useContext } from 'react';
import { ProductsContext } from '../components/data/ProductsContextProvider';

const RootLayout = () => {
  const { quantity, setQuantity, increase}= useContext(ProductsContext);

  return (
    <div>
      <NavBar size={5}/>
      <Outlet/>
      <FooterSection/>
    </div>
  )
}

export default RootLayout
