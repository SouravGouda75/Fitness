import React from 'react'

import Navbar from './Components/Navbar'
import "./App.css"

import { Route, Routes } from 'react-router-dom'
import Pricing from './Components/Pricing'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
// import {Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={ <Home/>  }/>
      <Route path='/blogs' element={ <Blogs/>  }/>
      
      <Route path='/price' element={<Pricing/>}/>
      </Routes>
      </>
  )
}

export default App
