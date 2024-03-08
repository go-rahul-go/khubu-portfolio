import React, { useContext, useState, useEffect, useRef } from 'react'
import "./hero.css"

import { motion } from "framer-motion"
import { ThemeContext } from "../App"
import heroImg from "../assets/hero/9700_4_04_pixian_ai.png"
import video from "../assets/video/pexels-c-technical-6153734 (2160p).mp4"
import cv from "../assets/cv/khusbu kumari's CV.pdf"
const textVar = {
  start: {
    width: "0%",

  },
  end: {
    width: "45%"

  }
}
const Hero = () => {

  const theme = useContext(ThemeContext)
  
  const disable = (event) => {
    event.preventDefault();
  }
 
  return (
    <div className='hero'>
      <div className='video' onContextMenu={(e) => disable(e)}>
        <video src={video} autoPlay muted loop></video>
      </div>
      <div className='hero-text'>
        <div className='hero-txt-box'>
          <span id="line1">Hello i am khusbu</span>
          <span id="line2">data scientist/data analyst</span>
          <span id="para">analyze complex data, derive meaningful insights using statistical methods, machine learning, and programming, aiding informed decision-making for businesses.</span>
          <div className='hero-downloads'>
            <a href="#projects">see my work</a>
            <a href={cv} download="khusbhi kumari CV" target='_blank' rel="noreferrer">download cv</a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero;