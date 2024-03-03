import React from 'react';
import NavBar from '../components/homePageComponents/NavBar';
import XX99MarkII from '../components/headphonesPageComponents/XX99MarkII';
import XX99MarkI from '../components/headphonesPageComponents/XX99MarkI';
import XX59 from '../components/headphonesPageComponents/XX59';
import Cards from '../components/homePageComponents/Cards';
import Tagline from '../components/homePageComponents/Tagline';
import HeadPhonesHeader from '../components/headphonesPageComponents/HeadPhonesHeader';

const Headphones = () => {
  return (
    <div className='wrapper font-Manrope'>
      <HeadPhonesHeader/>
      <XX99MarkII/>
      <XX99MarkI/>
      <XX59/>
      <Cards/>
      <Tagline/>

    </div>
  )
}

export default Headphones
