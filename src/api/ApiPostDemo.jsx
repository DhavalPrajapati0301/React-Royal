import axios from 'axios'
import React from 'react'

export const ApiPostDemo = () => {

const adduser = async() => {
    const userObj ={
        name: "dhaval",
        age: 24,
        email:"dhaval1@gmail.com",  
        password:"dhaval@123",
        isActive:true
    }
    try{
        const res = await axios.post("https://node5.onrender.com/user/user",userObj);
        console.log(res.data);
        alert('User created successfully');
    }
    catch(err){
        console.log(err);
        alert('Error creating user');
    }
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>Add User</h1>

        <button onClick={()=>{adduser()}}>Add User</button>

        </div>
  )
}
