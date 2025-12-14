import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation = () => {

const {register,handleSubmit,formState:{errors}} = useForm()

const submitHandler = (data)=>{
    alert("Form Submitted")
    console.log(data)
}
  return (

    <div style={{textAlign:"center"}}>   
    <h1> FormValidation </h1>
    <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label >Name</label>
                <input type="text" {...register("name",{required:{value:true,message:"name is required"}})} />
                {errors.name && errors.name.message}
            </div>
            <div>
                <label >Age</label>
                <input type="text" {...register("age",{required:{value:true,message:"Age is required"}})} />
                {errors.age?.message}
            </div>
                    <div>
                <input type='submit'></input>
            </div>

    </form>
    
    
    </div>


  )
}
