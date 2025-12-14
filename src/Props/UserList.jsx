import React from 'react'

export const UserList = (props) => {

console.log("userlist prop",props)
  return (
    <div style={{color:"navy"}}>
        <h2>UserList</h2>
        <h4>{props.data}</h4>   
        <h4>{props.user.id}</h4>
        <h4>{props.user.name}</h4>
        <h4>{props.user.age}</h4> 
        </div> 
  )
}

