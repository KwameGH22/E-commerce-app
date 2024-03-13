import React from 'react';

import { yx1 } from '../components/data/Product1';
import { zx7 } from '../components/data/Product5';
import {zx9} from '../components/data/Product6';
import CategoryHeader from '../components/speakerPageComponents/CategoryHeader';
import Category from '../components/earphonePageComponents/Category';
import CategorySpeakers from '../components/earphonePageComponents/CategorySpeakers';
import ZX9Speaker from '../components/speakerPageComponents/ZX9Speaker';
import ZX7Speaker from '../components/speakerPageComponents/ZX7Speaker';
import Cards from '../components/homePageComponents/Cards';
import Tagline from '../components/homePageComponents/Tagline';
import SpeakerHeader from '../components/speakerPageComponents/SpeakerHeader';


const Speakers = () => {

  // xx99m1={xx99m1} xx99m2={xx99m2} xx59={xx59} zx9={zx9} zx7={zx7}
  return (
    <div>
     <SpeakerHeader/>
     <ZX9Speaker details={zx9}/>
     <ZX7Speaker details={zx7}/>
     <Cards/>
     <Tagline/>
    </div>
  )
}

export default Speakers
