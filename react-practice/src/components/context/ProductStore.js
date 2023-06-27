//import productcontext
import {ProductContext} from './ProductContext'
import React,{ useState } from 'react';


const ProductStore = ({children}) => {
    //state
    let [products,setProducts]=useState([]);
  return (
    <ProductContext.Provider value={[products,setProducts]}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductStore