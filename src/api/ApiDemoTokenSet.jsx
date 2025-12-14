import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

export const ApiDemoTokenSet = () => {

    //  where to find
    // login-sucess -- token -->localStorage..
    // API headers --> key -Authorization -->value Bearer token  
  const getItem = async()=>{
    const token = localStorage.getItem("token")

    console.log(token)
    if(!token) return
    console.log("token found..",token)

    try{
        const res = await axios.get("https://node5.onrender.com/item",{
            headers:{
                "Authorization":`Bearer ${token}` 
            }
        })
        console.log(res)
        if(res.status == 200)
        {
            toast.success("item fetched")
        }
    }catch(err)
    {
        toast.error(err.response.data?.message)
    }
  }

  return (

    <div style={{textAlign:"center"}}>
        <h1>ApiDemoTokenSet</h1>
        <button onClick={getItem} className='btn'>GET ITEM</button>
    </div>
  )
}
