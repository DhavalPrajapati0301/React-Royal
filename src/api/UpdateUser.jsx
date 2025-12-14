import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateUser = () => {

    const id = useParams().id
    // alert(id)

    const navigate = useNavigate()

    const {register,handleSubmit} =  useForm({defaultValues:async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`) //id-->{}
          return res.data.data //{full object return..}
        
        }})


    const submithandler = async(data)=>{
        console.log(data)

        delete data._id
        console.log("after delete",data)
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
        console.log(res.data)
        console.log(res.status)
        if(res.status == 200)
        {
            alert("User Updated Successfully")
            navigate("/apifetch")
        }



    }


  return (

    <div style={{textAlign:"center"}}>
        <h1>UpdateUser</h1>

            <form onSubmit={handleSubmit(submithandler)}>
                <div>
                    <label >Name</label>
                    <input type="text" {...register("name")} />
                </div>

              <div>
                    <label >Age</label>
                    <input type="text" {...register("age")} />
                </div>

                  <div>
                    <label >Email</label>
                    <input type="text" {...register("email")} />
                </div>

                <div>
                    <input type="submit"  />
                </div>

            </form>
        
        </div>
  )

}
