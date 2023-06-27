//import taskcontext
import {TaskContext} from './TaskContext'
import {useState,useEffect} from 'react'
import axios from 'axios';

const TaskStore = ({children}) => {
    let [posts,setPosts]=useState([]);
    //function to fetch the data from api
    let getPostsData=async()=>{
        console.log("getting post data");
        let res=await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res.data)
        setPosts(res.data);
    }
   
    
    //set the post data
    useEffect(()=>{
       getPostsData();
    },[])
    //delete post
    const deletePost=(id)=>{
        let updatedPosts=posts.filter((postObj)=>{
            if(postObj.id !== id){
                return postObj;

            } 
        });
        console.log(updatedPosts)
        setPosts(updatedPosts);
    }
        

  return (
    //provide the context to root component
    <TaskContext.Provider value={[posts,deletePost]}>
        {children}
    </TaskContext.Provider>
 
  )
}

export default TaskStore
