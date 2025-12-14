import React from 'react'
import { useForm } from 'react-hook-form'

export const CheckBox = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        console.log(data)

    }
    const validationSchema = {
        hobbiesValidator: {
            required: {
                value: true,
                message: "Hobbies are required"
            },
            validate: (param) => {
                return param.length > 1 || "Select at least two hobbies"
            }
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>CheckBox</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <h3>Check Hobbies</h3>
                <div>
                    <label>
                        Reading
                    </label>
                    <input type="checkbox" value={"reading"}{...register("hobbies", validationSchema.hobbiesValidator)} />
                    <br />
                    <label>
                        Traveling
                    </label>
                    <input type="checkbox" value={"Traveling"} {...register("hobbies", validationSchema.hobbiesValidator)} />
                    <br />
                    <label>
                        Cricket
                    </label>

                    <input type="checkbox" value={"Cricket"} {...register("hobbies", validationSchema.hobbiesValidator)} />
                    <br />
                    <label>
                        Dance
                    </label>
                    <input type="checkbox" value={"Dance"} {...register("hobbies", validationSchema.hobbiesValidator)} />
                    <br />
                 <span style={{backgroundColor:"red",color:"white"}}>   {errors.hobbies?.message}</span>
                </div>

                <div>
                    <input type="submit" />
                </div>

            </form>



        </div>
    )
}
