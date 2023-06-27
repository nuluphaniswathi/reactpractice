import React,{useContext} from 'react';
import {useForm} from 'react-hook-form';
import {UserContext} from '../context/UserContext'

const AddUser = () => {
    //using user context 
    let {register,handleSubmit,formState:{errors},reset}=useForm();

    let [user,setUser]=useContext(UserContext);
    
    const onSubmit=(userObj)=>{
        console.log("userObject:",userObj);
        setUser([...user,userObj]);
        console.log("user array:",user);
        reset();

    }
  return (
    <div>
      <div className='bg-warning border border-5 rounded'>
      <p className='display-5 text-center'>Add User</p>
       <form onSubmit={handleSubmit(onSubmit)}>
        <div  className='mb-4'>
            <label htmlFor='name' className='fw-semibold'>Name</label>
            <input type="text" {...register("name",{required:true,minLength:4,maxLength:8})} className='form-control' id="name" placeholder='Enter Name'></input>
            {errors.name?.type==='required' && <p className='text-danger fw-bold'>*Username is required*</p>}
            {errors.name?.type==='minLength' && <p className='text-danger fw-bold'>*min length of user is 4*</p>}
            {errors.name?.type==='maxLength' && <p className='text-danger fw-bold'>*max length of user is 8*</p>}
        </div>
        <div  className='mb-4'> 
            <label htmlFor='Dob' className='fw-semibold'>Dob</label>
            <input type="date" {...register("dob")} className='form-control' id="dob" placeholder='Enter Date of birth'></input>
        </div>
        <div  className='mb-4'>
            <label htmlFor='email' className='fw-semibold'>email</label>
            <input type="email" {...register("email")} className='form-control' id="email" placeholder='Enter Email'></input>
        </div>
        <button type="submit" className='btn btn-success m-4'>Register</button>

      </form> 
      </div>
    </div>
  )
}

export default AddUser;
