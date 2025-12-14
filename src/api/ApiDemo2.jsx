import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from './loader'
import '../assets/css/loader.css'

export const ApiDemo2 = () => {

  const [message, setMessage] = useState("")
  const [employee, setEmployee] = useState([])
  const [loaader, setLoder] = useState(false)

  const getEmp = async () => {
    setLoder(true)
    const res = await axios.get("https://node5.onrender.com/product/getall")
    console.log("Api response", res.data)
    setMessage(res.data.message)
    setEmployee(res.data.data)
    setLoder(false)
  }

  return (
    <div style={{ textAlign: "center" }}>

      <h1>ApiDemo2</h1>
      {loaader && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}

      <h2 className="message">{message}</h2>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button className="btn" onClick={getEmp}>Fetch Users</button>
      </div>

      <table className="user-table" style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Colors</th>
            <th>IsAvailable</th>
          </tr>
        </thead>
        <tbody>
          {
            employee.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name || 'N/A'}</td>
                <td>{item.price || 'N/A'}</td>
                <td>{item.description || 'N/A'}</td>
                <td>{item.colors?.join(" ") || 'N/A'}</td>
                <td>{item.isAvailable ? "True" : "False"  || 'N/A'}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}
