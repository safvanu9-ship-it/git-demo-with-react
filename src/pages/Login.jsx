import React, { useState } from 'react'



const Login = () => {

  

    const handleSubmit = (e) => {
        console.log(username, password);
        
    }


    return (
        <div className=' h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit} className=' bg-black text-white rounded-sm flex flex-col gap-5 p-10 w-1/2 md:w-1/3'>
                <div className=' flex flex-col gap-2 '>
                    <label className=' italic font-semibold ' htmlFor="username">Username</label>
                    <input value={username} onChange={(e)=> setUsername(e.target.value)} className=' px-5 border-2 rounded-sm ' type="text" name="username" id="username" />
                </div>
                <div className=' flex flex-col gap-2 '>
                    <label className=' italic font-semibold ' htmlFor="password">Password</label>
                    <input value={password} onChange={(e)=> setUsername(e.target.value)} className=' px-5 border-2 rounded-sm ' type="password" name="password" id="password" />
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

export default Login
