import React from 'react';
import NavBar from '../components/homePageComponents/NavBar';
import HeroSection from '../components/homePageComponents/HeroSection';
import Cards from '../components/homePageComponents/Cards';
import YX1Earphones from '../components/homePageComponents/YX1Earphones';
import ZX7Speaker from '../components/homePageComponents/ZX7Speaker';
import ZX9Speaker from '../components/homePageComponents/ZX9Speaker';
import Tagline from '../components/homePageComponents/Tagline';
import FooterSection from '../components/homePageComponents/FooterSection';


const Homepage = () => {
  return (
    <div className=''>
      {/* <NavBar/> */}
      <HeroSection/>
      <Cards/>
      <ZX9Speaker/>
      <ZX7Speaker/>
      <YX1Earphones/>
      <Tagline/>
      {/* <FooterSection/> */}
    </div>
  )
}

export default Homepage
