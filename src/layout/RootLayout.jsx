import React from 'react';
import NavBar from '../components/homePageComponents/NavBar';
import { Outlet } from 'react-router-dom';
import FooterSection from '../components/homePageComponents/FooterSection';

const RootLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <FooterSection/>
    </div>
  )
}

export default RootLayout
