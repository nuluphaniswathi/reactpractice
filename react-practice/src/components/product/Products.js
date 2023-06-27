import React from 'react'
import AddProduct from './AddProduct';
import DisplayProduct from './DisplayProduct';
const Products = () => {
  return (
    <div className='container my-auto'>
    <div className='row container bg-white mx-auto border border-5 my-auto rounded'>
      <p className='display-3 text-center'>Products</p>
    <div className='col-sm-6 mb-4'><AddProduct/></div>
    <div className='col-sm-6'><DisplayProduct/></div>
    </div>
    </div>
  )
}

export default Products