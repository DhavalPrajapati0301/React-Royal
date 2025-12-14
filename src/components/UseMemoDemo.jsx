import React, { useMemo, useState } from 'react'

export const UseMemoDemo = () => {

    const [data,setdata] = useState([1,2,3,4,5,6,7,8])

    const [data2, setdata2] = useState([100,200,300,400,500])

    const addPerson = ()=>{
        
        setdata([...data,11])
    }


    const addPerson2 =()=>{
        setdata2([...data2,111])
    }
    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[data2])
  return (
    <div style={{textAlign:"center"}}>UseMemoDemo
        <h2>{randomNo}</h2>
        <h1>Use Memo Demo</h1>
        {
            data2.map((data)=>{
                return <li>{data}</li>
            })
        }
        <button onClick={addPerson}>Add </button> <br /> <br />
        <button onClick={addPerson2}>Add 2 </button>
    </div>
  )
}
