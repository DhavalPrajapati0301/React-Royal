import React from 'react'
import { useForm } from 'react-hook-form'

export const PatternValidate = () => {

    const{register,handleSubmit,formState:{errors}}  = useForm()


    const refcodeList = ['pvr','abc','joker','dhaval']
    
    const submitHandler=(data)=>{
        console.log(data)
    }


    const validationSchema ={
        contactValidator:{
          required:{
            value:true,
            message:"Contact is Required"
          },
          pattern:{
            value:/[6-9]{1}[0-9]{9}/,
            message:"Contact Is not Valid"
          }
        },
        inqCodevalidator:{
          required:{
              value:true,
              message:"Inquiry Code is Required"
          },
          validate:(param)=>{
            console.log("param",param)
            return param=="royal" || "Inquiry Code is not valid"
          }
        },
        refCodeValidator:{
           required:{
              value:true,
              message:"Refrence Code is Required"
          },
          validate:(param)=>{
            return refcodeList.includes(param) || "Refrence Code is not valid"
          }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>PatternValidate </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label >Contact</label>
            <input type="text" {...register ("contact",validationSchema.contactValidator)} />
            {errors.contact?.message}
          </div>

          <div>
              <label >Inquiry Code</label>
              <input type="text" {...register ("inqcode",validationSchema.inqCodevalidator)} />
              {errors.inqcode?.message}
          </div>
           <div>  
              <label >RefrenceCode</label>
              <input type="text" {...register ("refcode",validationSchema.refCodeValidator)} />
              {errors.refcode?.message}
          </div>
        <div>
          <input type="submit" />
        </div>
        </form>

        
        
        
        </div>
  )
}
