import React, { useState,useRef } from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { motion } from "framer-motion"

const NavBar = ({ newTheme }) => {
  const [menu, menuOpen] = useState(false)
  const [theme, changeTheme] = useState("light")
  const headerRef=useRef();
  function selectTheme() {
    if (theme === "light") {
      changeTheme("dark")
      newTheme("dark")
      
    }
    else {
      changeTheme("light")
      newTheme("light")
   
    }
  }

  return (
   
    <header className="head" ref={headerRef}>
      <div className={theme === "light" ? "theme-btn" : "theme-btn-flex-end"} onClick={selectTheme}>
        <div className='theme-toggle'>
          {
            theme === "light" ? <FiSun /> : <LuMoon />
          }
        </div>
      </div>
      <div className='pc-logo'>
          <NavLink id="header-logo-link" to="/"><h1>Khusbu.</h1></NavLink>
        
      </div>
      <div className='pc-links'>
        <NavLink to="/">home</NavLink>
        <NavLink to="/my-work">work</NavLink>
        <NavLink to="/certs">certificates</NavLink>
        <NavLink to="/contact">contact</NavLink>
       
      </div>
      <div className={!menu ? "menu-btn" : "menu-btn-hide"} onClick={() => menuOpen(!menu)}>
        <MdMenu />
      </div>
      <motion.div className={menu ? "menu" : "menu-hidden"} initial={{ x: "50%" }} animate={menu ? { x: 0 } : { x: "50%" }} transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
        <button onClick={() => menuOpen(false)} id="close-menu"><IoIosCloseCircleOutline id="close-icon" /></button>
        <ul >
          <li><NavLink to="/" onClick={() => menuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/my-work" onClick={() => menuOpen(false)}>work</NavLink></li>
          <li><NavLink to="/certs" onClick={() => menuOpen(false)}>certificates</NavLink></li>
          <li><NavLink to="/contact" onClick={() => menuOpen(false)}>contact</NavLink></li>
        </ul>
      </motion.div>
    </header>
   
  
  )
}

export default NavBar;