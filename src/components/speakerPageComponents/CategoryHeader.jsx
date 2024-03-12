import { useContext } from 'react';
import React from 'react';
import data from "../data/data.json"
import { ProductsContext } from '../data/ProductsContextProvider';



const CategoryHeader = ({title}) => {
    // const {yx1} = useContext(ProductsContext);
    // console.log(data)
    // const y = JSON.stringify(data);
    // const z = JSON.parse(y)
    // console.log(z); 
    // // const first = z.find(item => item.id===0);
    // console.log(first)  
    // const yx1 = data.slice(0,1);
    // // console.log(yx1)
    // // const cat = {...yx1}
    // // console.log(cat)
    // const yx2 = yx1.find(item => item.id===0);
    // // console.log(yx2);


  return (
    <div>
      <div className='bg-black py-10'>
      <h1 className="text-white font-bold text-center">{title.category}</h1>
    </div>
    </div>
  )
}

export default CategoryHeader
