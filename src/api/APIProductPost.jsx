import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const APIProductPost = () => {

    const  {register,handleSubmit}=  useForm()
    const submithandler = async(data)=>{
        console.log(data)
    try{
        const res = await axios.post("https://node5.onrender.com/product/create",data)
        console.log(res.data)
         alert("Product added successfully...")

    }catch(err){
        console.log("Error", err)
        alert("Error while adding product...")
    }
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>APIProductPost</h1>

        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label>NAME</label>

                <input type='text' {...register("name")}></input>
    
            </div>
            <div>
                <label>PRICE</label>
                <input type='number' {...register("price")}></input>
            </div>
            <div>
                <label>CATEGORY</label>
                <input type='text' {...register("category")}></input>
            </div>
            <div>   

                 Is Available: <input type='radio' {...register("isAvailable")} value="true"></input> <br></br>
                Is NOT Avlailable: <input type='radio' {...register("isAvailable")} value="false"></input>             
            </div>
            <div>
                <label >Decription</label>
                <input type='text' {...register("description")}></input>
            </div>
            <div>
                <label >Colors</label>
                <input type='text' {...register("colors")}></input>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
        

  )
}
