import React,{useContext} from 'react';
import {UserContext} from '../context/UserContext'
const DisplayUser = () => {
  let [user]=useContext(UserContext);
  return (
    <div>
      <div className='bg-warning  border border-5 rounded'>
      <p className="display-5 text-center ">DisplayUser</p>
      <table  className="table table-bordered table-striped table-hover 
            justify-content-center ">
        <thead className="table-dark">
          <tr>
          <th>Name</th>
          <th>Dob</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((userObj,index)=><tr key={index}>
              <td>{userObj.name}</td>
              <td>{userObj.dob}</td>
              <td>{userObj.email}</td>
            </tr>)
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default DisplayUser;