import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const ApiPostForm = () => {

   const {register , handleSubmit} = useForm()
   const submithandler = async(data)=>{
      console.log(data)

    data.isActive = data.isActive == "true" ? true :false
    data.age = parseInt(data.age)

    console.log(data)

    try{
      const res = await axios.post("https://node5.onrender.com/user/user",data)
      console.log(res.data);
      alert("user added successfully...")

    }catch(err)
    {
      alert("error while adding user......")
    }

   }


  return (
    <div style={{textAlign:"center"}}>
          <h1>ApiPostForm</h1>

        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                Active: <input type='radio' {...register("isActive")} value="true"></input> <br></br>
                NOT Active: <input type='radio' {...register("isActive")} value="false"></input>                
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>

    </div>
  )
}
