import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation1 = () => {

  const  {register,handleSubmit,formState:{errors}} = useForm()
    const submitHandler =(data)=>{
        console.log(data)
    }
        
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required"
            },
            minLength:{
                value:2,
                message:"min len must be 2"
            },
            maxLength:{
                value:20,
                message:"max len must 20"
            }
        },
        
            ageValidator:{
                required:{
                value:true,
                message:"age is required"
            },
            minLength:{
                value:1,
                message:"min len must be 1"
            },
            maxLength:{
                value:60,
                message:"max len must 60"
 
            }
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FormValidation1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label >Name</label>
                    <input type="text" {...register("name",validationSchema.nameValidator)} />
                    {errors.name?.message}
                </div>
               <div>
                    <label >Age</label>
                    <input type="text" {...register("age",validationSchema.ageValidator)} />
                    {errors.age?.message}
                </div>

                <div>
                    <input type="submit" />
                </div>
        </form>

    </div>
  )
}
