import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

        const {count} = useSelector((state)=>state.counter)

    return (
        <div className=' bg-black fixed w-full px-10 flex justify-between p-5 text-white'>

            <h1 className=' text-3xl font-bold'>Brand</h1>
            <h1 className=' text-3xl font-bold '>Count : {count}</h1>



        </div>
    )
}

export default Header
