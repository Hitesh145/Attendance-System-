import React from 'react'
import Navbar from './sections/Navbar'
import Herosection from './sections/Herosection'
import About from './sections/About'
// import Login from './sections/Login'
import Footer from './sections/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <About/>
      <Footer/>
      {/* <Login/> */}
    </>
  )
}

export default Home