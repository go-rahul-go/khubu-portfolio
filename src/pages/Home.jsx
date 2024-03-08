import React from 'react'
import Hero from "../components/Hero"
import AboutMyself from '../components/AboutMyself'
import MarqueeSlider from '../components/MarqueeSlider'
import Carousel from '../components/Carousel'
import Education from '../components/Education'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <Hero />
      <AboutMyself />
      <MarqueeSlider />
      <Carousel />
      <Education />
      <Footer/>
    </>
  )
}

export default Home;