import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
    </div>
  )
}

export default Home