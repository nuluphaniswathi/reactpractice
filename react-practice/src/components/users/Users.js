import React from 'react';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';
const Users = () => {
    
  return (
    <div>
    
    <div className='row container bg-white mx-auto mt-5 border border-5 rounded'>
     <p className='display-3 text-center'>Users</p>
        <div className='col-sm-6 mb-4'><AddUser/></div>     
        <div className='col-sm-6'><DisplayUser/></div>
    </div>
    </div>
  )
}
export default Users
