import React from 'react'
import Category from '../components/Category'
import Category2 from '../components/Category2'

const Product = () => {
  return (
    <div className="pt-32">
      <h1 className="text-3xl font-bold text-center mb-10">All Product Categories</h1>
      <Category />
      <Category2 />
    </div>
  )
}

export default Product
