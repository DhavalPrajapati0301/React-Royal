import React, { useState } from 'react'

export const InputDemo1 = () => {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")
    const [isSubmitted, setisSubmitted] = useState(false)


    const nameHandler = (event) => {
        console.log(event.target.value)
        setname(event.target.value)
    }

    const ageHandler = (event) => {
        console.log(event.target.value)
        setage(event.target.value)
    }

    const displyHandler=()=>{
        // alert (`Name = ${name} \n Age = ${age} \n Email = ${email}`)
        setisSubmitted(true)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>InputDemo1</h1>
            <div>
                <label>NAME</label>
                <input type="text" onChange={(event) => { nameHandler(event) }} />
                {/* {name} */}
            </div>

            <div>
                <label >AGE</label>
                <input type="text" onChange={(event)=>{ageHandler(event)}} />
            </div>

            <div>
                <label>EMAIL </label>
                <input type="text" onChange={(event)=>{setemail(event.target.value)}} />
            </div>
            <div>
                    <button onClick={()=>{displyHandler()}}>Display</button>                
            </div>
            { 
                isSubmitted == true &&
                <div>
                    <h1>Name = {name}</h1>
                    <h1>Age = {age}</h1>
                    <h1>Email = {email}</h1>
                </div> 
            }
        </div>
    )
}
