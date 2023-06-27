import React,{useContext} from 'react'
import { TaskContext } from './TaskContext'

const Posts = () => {
    let [posts,deletePost]=useContext(TaskContext)

  return (
    <div>
        <div>{posts.length===0}?<p>No posts</p></div>
        <div>
        <table  className="table table-bordered table-striped table-hover 
            justify-content-center ">
        <thead className="table-dark">
          <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          </tr>
        </thead>
        <tbody>
           {
            posts.map((postObj,index)=><tr key={index}>
              <td>{postObj.userId}</td>
              <td>{postObj.id}</td>
              <td>{postObj.title}</td>
              <td><button onClick={()=>deletePost(postObj.id)}>Delete post</button></td>
            </tr>)
          } 
        </tbody>
      </table>
        </div>



    </div>

  )
}

export default Posts