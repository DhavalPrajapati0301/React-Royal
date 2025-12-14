import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ApiDemo1.css' // optional if you want to move styles to external file
import { Link } from 'react-router-dom'

export const ApiDemo1 = () => {

  const [message, setMessage] = useState("") 
  const [users, setUsers] = useState([])

  

  const getUser = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user")
    console.log("Api response...", res.data)
    setMessage(res.data.message)
    setUsers(res.data.data)
  }

  const deleteUser =  async (id)=>{
    const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
    console.log(res)
    confirm("Are you sure you want to delete this user?")
    getUser()
  }

    useEffect(()=>{
    getUser()
  },[]) 

  return (
    <div className="container">
      <h1 className="title">API Demo</h1>
      <h2 className="message">{message}</h2>

      <button className="btn" onClick={getUser}>Fetch Users</button>

      <table  className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Password</th>
            <th>isActive</th>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.password}</td>
                <td>{item.isActive ? "True" : "False"}</td>
                <td><button className='btn btn-danger' onClick={()=>{deleteUser(item._id)}}>Delete</button>
                  <Link to={`/updateuser/${item._id}`} className='btn btn-warning'>Update</Link>
                </td>
      
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
