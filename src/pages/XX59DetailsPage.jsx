import React from 'react'
import XX59DetailCard from '../components/headphonesPageComponents/XX59DetailCard'
import XX59DetailFeature from '../components/headphonesPageComponents/XX59DetailFeature'
import XX59DetailGallery from '../components/headphonesPageComponents/XX59DetailGallery'
import XX59DetailAds from '../components/headphonesPageComponents/XX59DetailAds'
import Cards from '../components/homePageComponents/Cards'
import Tagline from '../components/homePageComponents/Tagline'

const XX59DetailsPage = () => {
  return (
    <div>
      <XX59DetailCard/>
      <XX59DetailFeature/>
      <XX59DetailGallery/>
      <XX59DetailAds/>
      <Cards/>
      <Tagline/>
    </div>
  )
}

export default XX59DetailsPage
