import React, { useContext, useEffect, useRef, useState } from 'react'
import "./aboutmyself.css"
import { ThemeContext } from "../App";
import girl1 from "../assets/others/4588_pixian_ai.png"
import { motion } from "framer-motion"
import pythonLogo from "../assets/skills logo/python-svgrepo-com.svg";
import aiLogo from "../assets/skills logo/ai-document-svgrepo-com.svg"
import MlLogo from "../assets/skills logo/machine-vision-svgrepo-com.svg"
import dbLogo from "../assets/skills logo/database-svgrepo-com.svg"
const AboutMyself = () => {

  const theme = useContext(ThemeContext)

  const myselfPic = useRef()
  const skillRef = useRef()
  const [inView, updateView] = useState(false)
  const [per, updatePer] = useState(0)
  const limit = 80;
  let clear = useRef();
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      console.log(entry)

      entry.isIntersecting ? updateView(true) : updateView(false)

    })

    observer.observe(myselfPic.current);



  }, [])

  return (


    <div className="myself" >
      <div>
        <motion.h2 initial={{ x: "-100vw" }} animate={inView ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.6 }} id="skills-h2">My skills</motion.h2 >
      </div>
      <div className={theme === "dark" ? "skills-dark" : "skills-light"} ref={myselfPic}>

        <motion.div className="skill-div-dark" initial={{ x: "-100vw" }} animate={inView ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className='skill-logo'>
            <img src={pythonLogo} alt="" />
          </div>
          <div className={theme === "dark" ? "skill-details-dark" : "skill-details-light"}>
            <h4>Python</h4>
            <div className="skills-bar">
              <motion.div className='skill-bar' initial={{ width: "1%" }} animate={inView ? { width: "70%" } : { width: "0%" }} transition={{ duration: 2, delay: 1.2 }}></motion.div>
              <p className='skill-percent'>80%</p>
            </div>
          </div>
        </motion.div>
        <motion.div className="skill-div-dark" initial={{ x: "-100vw" }} animate={inView ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.8, delay: 0.4 }}>
          <div className='skill-logo'>
            <img src={aiLogo} alt="" />
          </div>
          <div className={theme === "dark" ? "skill-details-dark" : "skill-details-light"}>
            <h4>Artificial Intelligence</h4>
            <div className="skills-bar">
              <motion.div className='skill-bar' initial={{ width: "1%" }} animate={inView ? { width: "70%" } : { width: "0%" }} transition={{ duration: 2, delay: 1.2 }}></motion.div>
              <p className='skill-percent'>80%</p>
            </div>
          </div>
        </motion.div>
        <motion.div className="skill-div-dark" initial={{ x: "-100vw" }} animate={inView ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 1.2, delay: 0.6 }}>
          <div className='skill-logo'>
            <img src={MlLogo} alt="" />
          </div>
          <div className={theme === "dark" ? "skill-details-dark" : "skill-details-light"}>
            <h4>Machine Learning</h4>
            <div className="skills-bar">
              <motion.div className='skill-bar' initial={{ width: "1%" }} animate={inView ? { width: "65%" } : { width: "0%" }} transition={{ duration: 2, delay: 1.2 }}></motion.div>
              <p className='skill-percent'>75%</p>
            </div>
          </div>
        </motion.div>
        <motion.div className="skill-div-dark" initial={{ x: "-150vw" }} animate={inView ? { x: 0 } : { x: "-150vw" }} transition={{ duration: 1.4, delay: 0.7 }}>
          <div className='skill-logo'>
            <img src={dbLogo} alt="" />
          </div>
          <div className={theme === "dark" ? "skill-details-dark" : "skill-details-light"}>
            <h4>Database</h4>
            <div className="skills-bar">
              <motion.div className='skill-bar' initial={{ width: "1%" }} animate={inView ? { width: "75%" } : { width: "0%" }} transition={{ duration: 2, delay: 1.2 }}></motion.div>
              <p className='skill-percent'>90%</p>
            </div>
          </div>
        </motion.div>

      </div>
      <div className={theme === "dark" ? "myself-pic-dark" : "myself-pic-light"} >
        <motion.img src={girl1} alt="" className={theme === "dark" ? "girl-pic-dark" : "girl-pic-light"} initial={{ x: "100vw" }} animate={inView ? { x: 0 } : { x: "100vw" }} transition={{ duration: 1.5, delay: 0.1, type: "spring", stiffness: 30 }} />
      </div>
    </div>


  )
}

export default AboutMyself;