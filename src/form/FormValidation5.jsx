import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation5 = () => {


    const {register,handleSubmit,formState:{errors}} = useForm({mode:'onBlur'})

    const submitHandler =(data)=>{
        console.log(data)
    }

    const validationSchema ={
        namevalidator:{
            required:{
                value:true,
                message:"name is required"

             },
             minLength:{
                value:3,
                message:"min length is 3"
             },
             maxLength:{
                value:10,
                message:"max length is 10"
             }
        },
        emailValidator:{
                required:{
                value:true,
                message:"email is required"

             },
             minLength:{
                value:3,
                message:"min length is 3"
             },
             maxLength:{
                value:10,
                message:"max length is 10"
             }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormValidation5</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
            <label >Name</label>
            <input type="text"  {...register ("name",validationSchema.namevalidator)}/>
            {errors.name?.message}
            </div>
            <div>
            <label>Email</label>
            <input type="text" {...register ("email" , validationSchema.emailValidator)} />
            {errors.email?.message}
</div>
            <input type="submit" />
        </form>

        
        </div>
  )
}
