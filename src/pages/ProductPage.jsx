import React from 'react';
import ProductDetailCard from '../components/earphonePageComponents/ProductDetailCard';
import BackButton from '../components/headphonesPageComponents/BackButton';
import { Gadgets } from '../../resources/Products';

const ProductPage = ({productId}) => {

    const productData = Gadgets.find(({ slug }) => slug === productId);
    const slugList = productData.map((item) => 
        (
            <div key={item.id}>
                <BackButton/>
                <ProductDetailCard productData={productData}/>
            </div>
    ))

  return (
    <div>{slugList}</div>
  )
}

export default ProductPage
