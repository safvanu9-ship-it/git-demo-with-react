import React, { useState } from 'react'

const Register = () => {

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        email: "",
        age: "",


    })

    const [formErrors,setFormErrors] = useState({})
    console.log(formErrors);
    


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmut = (e) => {
        e.preventDefault()
        setFormErrors(errors)
        if (Object.keys(errors).length ===0)
        // Register Logic
        console.log(formValues);
        

    }

    const validate = (values) =>{
        const errors = {};

        if (!values.username ){
            errors.username = "Username must be empty!"
        }else if (values.username.length <3){
            errors.username = "Username must contain 3 charecters"
        }
        if (!values.password){
            errors.password ="password canot be empty!"
        }else if (values.password.length <8){
            errors.password ="Password must contain 8 charecters"
        }
        return errors
    }




    return (
        <div className=' h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmut} className=' bg-black text-white rounded-sm flex flex-col gap-5 p-10 w-1/2 md:w-1/3'>
                <div className=' flex flex-col gap-2 '>
                    <label className=' italic font-semibold ' htmlFor="username">Username</label>
                    <input onChange={handleChange} value={formValues.username} className=' px-5 border-2 rounded-sm ' type="text" name="username" id="username" />
                    <p className=' text-red-300 text-sm'>{formErrors.username && formErrors.username}</p>
                </div>
                <div className=' flex flex-col gap-2 '>
                    <label className=' italic font-semibold ' htmlFor="password">Password</label>
                    <input onChange={handleChange} value={formValues.password} className=' px-5 border-2 rounded-sm ' type="password" name="password" id="password" />
                </div>
                <div className=' flex flex-col gap-2 '>
                    <label className=' italic font-semibold ' htmlFor="age">Age</label>
                    <input onChange={handleChange} value={formValues.age} className=' px-5 border-2 rounded-sm ' type="text" name="age" id="age" />
                </div>
                <div className=' flex flex-col gap-2 '>
                    <label className=' italic font-semibold ' htmlFor="email">E-mail</label>
                    <input onChange={handleChange} value={formValues.email} className=' px-5 border-2 rounded-sm ' type="text" name="email" id="email" />
                </div>
                <div>
                    <button type='submit' className=' bg-linear-to-tr from-orange-300 to-lime-700 rounded-sm py-3 text-black font-semibold'>
                        Login
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Register
