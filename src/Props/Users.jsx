import React from 'react'
import { UserList } from './UserList'
import { MyButton } from '../common/MyButton'

export const Users = () => {

    const data = "User data"

    const user = 
        {
            id:1,
            name:"Dhaval",
            age:22
        }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Users Component
            </h1>
            <MyButton></MyButton>
            <UserList data = {data} user={user}></UserList>
        </div>
  )
}
