import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation2 = () => {
  
    const {register,handleSubmit,formState:{errors}} =useForm()

    const submitHandler =(data)=>{
        console.log(data)
    }

    const validationSchema={
        nameValidator:{
            required:{
                value:true,
                message:"Name is Required"
            },
            minLength:{
                value:3,
                message:"Min Length Should be 3"
            },
            maxLength:{
                value:15,
                message:"Max Length Should be 15"
            }
        },
        phoneValidator:{
            required:{
                value:true,
                message:"Phone Number is Required",
            },
            minLength:{
                value:10,
                message:"Must be Exactly 10"
            }
            },
        msgValidator:{
            required:{
                value:true,
                message:"Message is Required",
            },
            minLength:{
                value:10,
                message:"Min Length Should be 10"
            },
            maxLength:{
                value:100,
                message:"Max Length Should be 100"
            }
            }
       
        }

  return (
    <div style={{textAlign:"center"}}>
     
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <h1>FeedBack Form</h1>
                      
                 <div>   <label>
                        Full Name
                    </label>
                    <input type="text" {...register("name",validationSchema.nameValidator)} />
                    {errors.name?.message}
                    </div>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" {...register("phone",validationSchema.phoneValidator)}/>
                    {errors.phone?.message}
                </div> 
                 <div>
                    <label>Short Description</label>
                    <input type="text" {...register("msg",validationSchema.msgValidator)}/>
                    {errors.msg?.message}
                </div>  
                <div>
                    <input type="submit" />
                </div>

            </form>
    </div>
  )


}