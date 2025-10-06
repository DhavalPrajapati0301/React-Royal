import React, { useState } from 'react'

export const UseState = () => {
  

//  var count = 0

const[count,setCount]=useState(0)

    
  const increseCount =()=>{
    alert("Increse")
    setCount(count+1)
    console.log("Count=",count)

  }

    const decreseCount = (x)=>{
        alert("decrement= "+x)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:"center"}}>Use state Demo 1 </h1>
        <h1>Count= {count}</h1>
        <button onClick={increseCount}>increse</button>
        {/* <button onClick={decreseCount(100)}></button> */}

        <button onClick={()=>{decreseCount(100)}}>decrese</button>
    </div>
  )
}
