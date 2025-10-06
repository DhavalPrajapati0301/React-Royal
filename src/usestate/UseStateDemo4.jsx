import React, { useState } from 'react'

function UseStateDemo4() {
  const[user,setUser] = useState({id:1,name:"dhaval"})
  const changeUser =()=>{
    setUser({...user,id:user.id+100,name:user.name.toUpperCase()})
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo4</h1>
        {user.id}
        {user.name}
        <button onClick={()=>{changeUser()}}> Change User</button>
    </div>
  )
} 

export default UseStateDemo4