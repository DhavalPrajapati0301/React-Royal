import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation3 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitHandler = (data) => {
    console.log(data)

  }


  const validationSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "Name is Required"
      },
      minLength: {
        value: 4,
        message: "Min Length Should be 4"
      },
      maxLength: {
        value: 15,
        message: "Min Length Should be 15"
      }
    },
    ageValidator: {
      required: {
        value: true,
        message: "Age is Required"
      },
      minLength: {
        value: 18,
        message: "Min Length Should be 18"
      },
      maxLength: {
        value: 60,
        message: "Min Length Should be 60"
      }
    }

  }


  return (
    <div style={{ textAlign: "center" }}>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <h1> Pan Card Form
          </h1>
        </div>
        <div>
          <label >Full Name</label>
          <input type="text" {...register ("name", validationSchema.nameValidator)} />
          {errors.name?.message}
        </div>

        <div>
          <label >Age</label>
          <input type="text" {...register ("age", validationSchema.ageValidator)} />
          {errors.age?.message}
        </div>
        <div>
          <input type="submit" />
        </div>


      </form>
    </div>
  )
}
