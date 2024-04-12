import React from 'react'

const CategoryHeader = (categoryName) => {
  return (
    <div className='bg-black py-10'>
    <h1 className="text-white font-bold text-center font-Manrope text-2xl">{categoryName}</h1>
    </div>
  )
}

export default CategoryHeader
