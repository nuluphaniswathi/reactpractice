
import React,{useContext} from 'react';
import {useForm} from 'react-hook-form';
import {ProductContext} from '../context/ProductContext'
const AddProduct = () => {
   //using user context 
   let {register,handleSubmit,formState:{errors},reset}=useForm();

   let [products,setProducts]=useContext(ProductContext);
   
   const onSubmit=(productObj)=>{
       console.log("productObject:",productObj);
       setProducts([...products,productObj]);
       console.log("product array:",products);
       reset();

   }

  return (
    <div>
      <div className='bg-warning border border-5 rounded'>
      <p className='display-5 text-center'>Add new product</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
            <label htmlFor='name' className='fw-semibold'>Name</label>
            <input type="text" {...register("name",{required:true})} className='form-control' id="name" placeholder='Enter Name'></input>
            {errors.name?.type==="required"&&<p className='text-danger fw-bold'>Name is required</p>}
        </div>
        <div className='mb-3'>
            <label htmlFor='brand' className='fw-semibold '>Brand</label>
            <input type="text" {...register("brand",{required:true})} className='form-control' id="brand" placeholder='Enter Brand'></input>
            {errors.name?.type==="required"&&<p className='text-danger fw-bold'>Brand is required</p>}
        </div>
        <div className='mb-3'>
            <label htmlFor='price' className='fw-semibold '>Price</label>
            <input type="text" {...register("price",{require:true})} className='form-control' id="price" placeholder='Enter price'></input>
            {errors.name?.type==="required"&&<p className='text-danger fw-bold'>Brand is required</p>}
        </div>
        <button type="submit" className='btn btn-success m-4'>Register</button>
        </form>
        </div>
    </div>
  )
}

export default AddProduct
