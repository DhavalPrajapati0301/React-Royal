import React, { useState } from 'react'

function UseStateDemo2() {

    const [loading,setLoading] = useState(true)

    const stopLoader =() =>{
        setLoading(false)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
    {
        loading == true && <h1>Loading...</h1>
    }
    <button onClick={()=>{stopLoader()}}>Stop</button>
    </div>
  )
}

export default UseStateDemo2