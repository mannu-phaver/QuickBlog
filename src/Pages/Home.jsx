import React from 'react'
import Blog from './Blog'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import BlogList from '../Components/BlogList'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <>
      {/* <Blog/> */}
      <Navbar/>
      <Header/>
      <BlogList/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Home
