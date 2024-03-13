import React from 'react';
import { yx1 } from '../components/data/Product1';
import DetailCard from '../components/earphonePageComponents/DetailCard';
import Cards from '../components/homePageComponents/Cards';
import Tagline from '../components/homePageComponents/Tagline';
import Category from '../components/earphonePageComponents/Category';
import CategoryHeader from '../components/speakerPageComponents/CategoryHeader';
import EarphonesHeader from '../components/earphonePageComponents/EarphonesHeader';

const Earphones = () => {
  return (
    <div>
      <EarphonesHeader/>
      <Category details={yx1}/>
      <Cards/>
      <Tagline/>
      
    </div>
  )
}

export default Earphones
