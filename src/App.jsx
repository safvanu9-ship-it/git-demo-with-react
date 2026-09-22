import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Header from './Components/Header'
import Counter from './pages/Counter'
import { addProducts } from './features/products/productSlice'
import Products  from './pages/Products'
import { useDispatch } from 'react-redux'
import Login from './pages/Login'
import Register from './pages/Register'





function App() {

  // const dispatch = useDispatch()

  // const fetchProducts = async () => {
  //   try{
  //     const res = await fetch("https://dummyjson.com/products")
  //     const data = await res.js()
  //     dispatch(addProducts(data.Products))
  //   }catch (error){
  //     console.log(error);
      
  //   }
  // }

  // useEffect(()=>{
  //   fetchProducts()
  // },[])



  return (
    <div>
      <Header/>
      {/* <Counter/> */}
      {/* <Products /> */}
      {/* <Login /> */}
      < Register />
    </div>

  )
}

export default App
