import {UserContext} from './UserContext';
import { useState } from 'react';

//create function and export
function Store1({children}){
    //state
    let [user,setUser]=useState([]);
    //provide the context to root component
    return(
    <UserContext.Provider value={[user,setUser]}>
        {children}
    </UserContext.Provider>
    )
}
export default Store1


