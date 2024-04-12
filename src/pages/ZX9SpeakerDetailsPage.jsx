import React from 'react';
import ZX9DetailCard from '../components/speakerPageComponents/ZX9DetailCard';
import ZX9DetailFeature from '../components/speakerPageComponents/ZX9DetailFeature';
import ZX9DetailsGallery from '../components/speakerPageComponents/ZX9DetailsGallery';
import ZX9DetailAds from '../components/speakerPageComponents/ZX9DetailAds';

const ZX9SpeakerDetailsPage = () => {
  return (
    <div>
      <ZX9DetailCard/>
      <ZX9DetailFeature/>
      <ZX9DetailsGallery/>
      <ZX9DetailAds/>
    </div>
  )
}

export default ZX9SpeakerDetailsPage
