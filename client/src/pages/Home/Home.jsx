import React from 'react'
import Navbare from './Navbare'

import './Home.css'
import Footer from './Footer'
import Section from './Section'

const Home = () => {
  return (
<div className="flex flex-col min-h-screen">
    <Navbare />
    <Section />
    <Footer/>
    </div>
  )
}

export default Home