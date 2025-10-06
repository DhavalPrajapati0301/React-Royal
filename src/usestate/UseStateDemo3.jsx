import React, { useState } from 'react'

function UseStateDemo3() {

    const [user,setuser] = useState({id:1,name:"dhaval"})
    const changeuser =() =>{
        var newuser = {
            id:user.id + 100,
            name:user.name.toUpperCase()

            }
            setuser(newuser)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>
        {user.id}
        {user.name}
        <button onClick={()=>{changeuser()}}>Change</button>
      </div>
  )
}

export default UseStateDemo3