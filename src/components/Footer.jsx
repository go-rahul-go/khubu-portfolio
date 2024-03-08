import React, { useContext, useRef, useEffect, useState } from 'react'
import { ThemeContext } from "../App"
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
import "./footer.css"
import facebook from "../assets/social icons/facebook-svgrepo-com.svg"
import github from "../assets/social icons/github-svgrepo-com (1).svg"
import linkedin from "../assets/social icons/linkedin-svgrepo-com (1).svg"
import hacker from "../assets/social icons/hackerrank-svgrepo-com.svg"
import { FaRegCopyright } from "react-icons/fa";
const socialIcon = [
    { url: facebook, href: "https://www.facebook.com/" },
    { url: github, href: "https://github.com/ikhushbusingh" },
    { url: linkedin, href: "https://www.linkedin.com/in/ikhushbu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    { url: hacker, href: "https://www.hackerrank.com/profile/ikhushbu" }
]
const aniVar = {
    start: {
        width: "2%",
        height: "2%",
        borderRadius: "50%"
    },
    end: {
        width: "17%",
        height: "70%",
        borderRadius: "10px"
    }
}
const h2Var = {
    start: {
        fontSize: "0em"
    },
    end: {
        fontSize: "2.35em"
    }
}
const Footer = () => {
    const theme = useContext(ThemeContext)
    const [vis, changeVis] = useState(false)

    const greetRef = useRef()
    const h2Ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            let entry = entries[0]

            entry.isIntersecting ? changeVis(true) : changeVis(false)

        })

        observer.observe(greetRef.current)


    }, [])
    return (
        <section className={theme === "dark" ? "footer footer-dark" : "footer footer-light"}>
            <div className='circles' >
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                {/* <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
                    <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>

                </div>
                <div className='row'>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    
                </div>
                <div className='row'>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    <div className={theme==="dark"?"circle circle-dark":"circle circle-light"}></div>
                    
                </div> */}
            </div>
            <motion.h2 className={theme === "dark" ? 'foot-h2 foot-h2-dark' : 'foot-h2 foot-h2-light'} ref={h2Ref} variants={h2Var} initial="start" animate={vis ? "end" : "start"} transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 50 }}>thanks for visiting</motion.h2>
            <motion.div className={theme === "dark" ? "f-div f-div-dark" : "f-div f-div-light"}>
                <div className={theme === "dark" ? "foot-nav foot-nav-dark" : "foot-nav foot-nav-light"}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/my-work">work</NavLink>
                    <NavLink to="/certs">certificates</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                </div>
                <div className={theme === "dark" ? "social" : "social"}>
                    <div className="social-inner" ref={greetRef}>
                        {
                            socialIcon.map((item) => {
                                return (
                                    <motion.a className={theme === "dark" ? "s-icon s-icon-dark" : "s-icon s-icon-light"} href={item.href} variants={aniVar} initial="start" animate={vis ? "end" : "start"} transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 150 }} target='_blank'>
                                        <img src={item.url} alt="" />
                                    </motion.a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={theme === "dark" ? "copy copy-dark" : "copy copy-light"}>
                    <div className='copy-left'>
                        <div className='copy-logo'>
                            <FaRegCopyright />
                        </div>
                        <div className={theme==="dark"?"owner owner-dark":"owner owner-light"}>khusbu</div>
                        <div id="year">
                            (2024 - present)
                        </div>
                    </div>
                    <div id="rights">all rights reserved</div>
                </div>
            </motion.div>
        </section>
    )
}

export default Footer;