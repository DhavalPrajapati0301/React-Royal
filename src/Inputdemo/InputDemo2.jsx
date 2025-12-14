import React, { useState } from 'react'

export const InputDemo2 = () => {

    const [name, setname] = useState("")
    const [chooseColor, setchooseColor] = useState("black")
    const [isSubmitted, setisSubmitted] = useState(false)

    const submitHandler = ()=>{
        setisSubmitted(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo2</h1>
        <div>
            <label>Name</label>
            <input type="text" onChange={(event)=>{setname(event.target.value)}} />
        </div>
        <div>
            <label>Choose Color</label>
            <input type="color" onChange={(event)=>{setchooseColor(event.target.value)}} />
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>Submit</button>
        </div>
        <div>
            {
                isSubmitted && <div style={{color:chooseColor}}>
                    <h1>Output</h1>
                    <h1>Name : {name}</h1>
                </div>
            }
        </div>
    </div>
  )
}
