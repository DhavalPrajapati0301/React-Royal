import React from 'react'

export const MyButton = (props) => {
  return (
    <div>
        <h1 style={{textAlign:"center", color:"lightcoral"}}>MyButton</h1>
        <button style={{textAlign:"center"}} onClick={()=>{props.fun()}} className={props.class||"btn btn-primary"}>{props.name || "test"}  </button>    
    
    </div>
  )
}
