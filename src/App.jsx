import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Blog from './Pages/Blog'
import Home from './Pages/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App
