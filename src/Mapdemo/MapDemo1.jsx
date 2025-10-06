import React from 'react'

function MapDemo1() {

    let users = ["dhaval","meet","sarjan","ansh"]

  return (
    <div style={{textAlign:"center"}}>
        
        <h1>MapDemo1</h1>
        {
            users.map((user)=>{
                return <h1>{user}</h1>
            })
        }

    </div>
  )
}

export default MapDemo1