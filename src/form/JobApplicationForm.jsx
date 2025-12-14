import React from 'react'
import { useForm } from 'react-hook-form'
import '../assets/css/form.css'

export const JobApplicationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({mode:"onBlur"})

    const submitHandler = (data) => {
        console.log(data)
        alert('Application submitted successfully!')
    }

    return (
        <div className="form-container compact">
            <div className="form-card">
                <h2 className="form-title">Job Application</h2>
                
                <form onSubmit={handleSubmit(submitHandler)} className="job-form">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className={`form-input ${errors.name ? 'error' : ''}`}
                            placeholder="Full Name *"
                            {...register("name", { 
                                required: "Name is required",
                                minLength: { value: 3, message: "Min 3 characters" },
                                maxLength: { value: 15, message: "Max 15 characters" }
                            })} 
                        />
                        {errors.name && <span className="error-message">{errors.name.message}</span>}
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            className={`form-input ${errors.email ? 'error' : ''}`}
                            placeholder="Email *"
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email"
                                }
                            })} 
                        />
                        {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className={`form-input ${errors.phone ? 'error' : ''}`}
                                placeholder="Phone *"
                                {...register("phone", { 
                                    required: "Phone is required",
                                    pattern: {
                                        value: /[6-9]{1}[0-9]{9}/,
                                        message: "Invalid phone"
                                    }
                                })} 
                            />
                            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                        </div>

                        <div className="form-group">
                            <input 
                                type="number" 
                                className={`form-input ${errors.experince ? 'error' : ''}`}
                                placeholder="Experience (Years) *"
                                {...register("experince", { 
                                    required: "Experience is required",
                                    min: { value: 1, message: "Min 1 year" }
                                })} 
                            />
                            {errors.experince && <span className="error-message">{errors.experince.message}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <input 
                            type="number" 
                            className={`form-input ${errors.salary ? 'error' : ''}`}
                            placeholder="Expected Salary (₹) *"
                            {...register("salary", { 
                                required: "Salary is required",
                                min: { value: 10000, message: "Min ₹10,000" },
                                max: { value: 200000, message: "Max ₹200,000" }
                            })} 
                        />
                        {errors.salary && <span className="error-message">{errors.salary.message}</span>}
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            className={`form-input ${errors.profile ? 'error' : ''}`}
                            placeholder="Profile URL *"
                            {...register("profile", { 
                                required: "URL is required",
                                validate: (param) => 
                                    !param.startsWith("https://") ? "Must start with https://" : true
                            })} 
                        />
                        {errors.profile && <span className="error-message">{errors.profile.message}</span>}
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}