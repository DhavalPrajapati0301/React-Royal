import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {

    const{register,handleSubmit,reset} = useForm()
    const [isSubmitted, setisSubmitted] = useState(false)

    const navigate = useNavigate()

    const submithandler = async(data)=>{
        setisSubmitted(true)
        console.log(data);
        try{
            const res = await axios.post("https://node5.onrender.com/user/login", data)
            console.log(res.data.data)
            if(res.status == 200)
            {
                //  alert("login successful...")
                toast.success("Login success")
                 localStorage.setItem("token",res.data.data)
                navigate("/netflixhome")
            }
        }
        catch(err){
            alert("login failed...")
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <input  disabled={isSubmitted} type='submit'></input>
            </div>
        </form>
    </div>
  )
}
