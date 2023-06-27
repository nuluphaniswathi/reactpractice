import React,{useContext} from 'react'
import {ProductContext} from '../context/ProductContext'

const DisplayProduct = () => {
  let [products]=useContext(ProductContext)
  return (
    <div className='bg-warning border border-5 rounded'>
      <p className='display-5 text-center'>DisplayProduct</p>
      <table className="table table-bordered table-striped table-hover 
            justify-content-center mx-auto">
        <thead className="table-dark">
          <tr>
          <th>Name</th>
          <th>Dob</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((userObj,index)=><tr key={index}>
              <td>{userObj.name}</td>
              <td>{userObj.brand}</td>
              <td>{userObj.price}</td>
            </tr>)
          }
        </tbody>
      </table>

    </div>
  )
}

export default DisplayProduct
