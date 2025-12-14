import React from 'react'
import { useForm } from 'react-hook-form'

export const PasswordMatch = () => {

     const {register , handleSubmit,formState:{errors}, watch} =useForm({mode:'onChange'})

        const password = watch("password","")
        const confirmPassword = watch("confirmPassword","")

        const submitHandler=(data)=>{
            alert ("form submitted")
        }

        const passwordMatch = password == confirmPassword && password !== ""
        console.log(passwordMatch)

        const validationSchema ={
            passwordValidator:{
                required:{
                    value:true,
                    message:"password is required"
                }
            },
            confirmPasswordValidator:{
                required:{
                    value:true,
                    message:"Confirm password is required"
                },
                validate:(value)=>{
                    value === password || "password does not match"
                }
            }
        }

  return (
    <div style={{textAlign:"center"}}>
        
        <h1>PasswordMatch
        </h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label >Password</label>
                <input type="text" {...register ("password",validationSchema.passwordValidator)} />
                {errors.password?.message}
            </div>

            <div>
                <label >Confirm Password</label>
                <input type="text" {...register ("confirmPassword",validationSchema.confirmPasswordValidator)} />
                {errors.confirmPassword?.message}
            </div>
            {
                password && confirmPassword && <p style={{color:passwordMatch?"green":"red"}}>
                    {passwordMatch ? "password match" : "password not match"}
                </p>
            }

            <input type="submit" />
        </form>
        </div>
  )
}
