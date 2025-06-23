import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import Layout from './Pages/admin/Layout'
import Dashboard from './Pages/admin/Dashboard'
import AddBlog from './Pages/admin/AddBlog'
import ListBlog from './Pages/admin/ListBlog'
import Comments from './Pages/admin/Comments'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>


        <Route path='/admin' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='addBlog' element={<AddBlog/>}/>
            <Route path='listBlog' element={<ListBlog/>}/>
            <Route path='comments' element={<Comments/>}/>






        </Route>
      </Routes>
    </div>
  )
}

export default App
