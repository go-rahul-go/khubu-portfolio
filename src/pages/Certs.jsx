import React, { useContext, useEffect, useRef, useState } from 'react'
import "./cert.css"
import { ThemeContext } from "../App"
import { motion } from "framer-motion"
import desert3 from "../assets/cert-images/desert3.png"
import desert2 from "../assets/cert-images/desert2.png"
import { FaStar } from "react-icons/fa";
import hackerrankLogo from "../assets/social icons/hackerrank-svgrepo-com.svg"
import dataLogo from "../assets/cert-images/data-city-logo.png"
import { HiOutlineCloudDownload } from "react-icons/hi";
import da from "../assets/cert-images/data analyst.jpg"
import sBase from "../assets/cert-images/sql-basic.jpg"
import sInter from "../assets/cert-images/sql-intermediate.jpg"
import sAdv from "../assets/cert-images/sql-advanced.jpg"
import { FaRegWindowClose } from "react-icons/fa";
const cardVar = {
    start: {
        x: "-100%",
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1
    }
}
const certImages = [
    { id: 1, title: "data-analysis", url: da },
    { id: 2, title: "mysql-basic", url: sBase },
    { id: 3, title: "mysql-inter", url: sInter },
    { id: 4, title: "mysql-adv", url: sAdv }
]
const arr=[da,sBase,sInter,sAdv]
const Certs = () => {
    const theme = useContext(ThemeContext)

    const [box1, updatebox1] = useState(true)
    const [box2, updatebox2] = useState(false)
    const [box3, updatebox3] = useState(false)
    const [box4, updatebox4] = useState(false)
    const [cert, changeCert] = useState("")
    const [show, changeShow] = useState("hide")
    const b1 = useRef();
    const b2 = useRef();
    const b3 = useRef();
    const b4 = useRef();
    const showCert = (option) => {
        changeCert(option)
    }

    useEffect(() => {
        const observer1 = new IntersectionObserver(entries => {

            let e1 = entries[0]
            e1.isIntersecting ? updatebox1(true) : updatebox1(false)
            

        })
        const observer2 = new IntersectionObserver(entries => {

            let e2 = entries[0]
            
            e2.isIntersecting ? updatebox2(true) : updatebox2(false)

        })
        const observer3 = new IntersectionObserver(entries => {

            let e3 = entries[0]
            
            e3.isIntersecting ? updatebox3(true) : updatebox3(false)

        })
        const observer4 = new IntersectionObserver(entries => {

            let e4 = entries[0]
          
            e4.isIntersecting ? updatebox4(true) : updatebox4(false)

        })

        observer1.observe(b1.current)
        observer2.observe(b2.current)
        observer3.observe(b3.current)
        observer4.observe(b4.current)

    }, [])
    return (
        <section className={theme === "dark" ? "certs certs-dark" : "certs certs-light"}>
            <div className='area'>
                <ul class={theme === "dark" ? "circles circles-dark" : "circles circles-light"}>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                    <li><FaStar className='star' /></li>
                </ul>
                <div className='desert'>
                    {theme === "dark" ? <img src={desert3} alt="" /> : <img src={desert2} alt="" />}
                </div>
            </div>

            <div className={theme === "dark" ? "cert-box cert-box-dark" : "cert-box cert-box-light"}>
                <h1 className={theme === "dark" ? "cert-h1 cert-h1-dark" : "cert-h1 cert-h1-light"}>certificates</h1>
                <motion.div variants={cardVar} initial="start" animate={box1 ? "end" : "start"} transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 50 }}>
                    <h3 className={theme === "dark" ? "cert-h3 cert-h3-dark" : "cert-h3 cert-h3-light"}>data analyst</h3>
                    <div className={theme === "dark" ? "cert-logo-div cert-logo-div-dark" : "cert-logo-div cert-logo-div-light"}></div>
                    <div className={theme === "dark" ? "cert-logo-div cert-logo-div-dark" : "cert-logo-div cert-logo-div-light"} id="data-city-logo">
                        <img src={dataLogo} alt="" />
                    </div>
                    <div className={theme === "dark" ? "cert-digits cert-digits-dark" : "cert-digits cert-digits-light"} ref={b1}>
                        <span>0307</span>
                        <span>2022</span>
                        <span>1211</span>
                        <span>1999</span>
                    </div>
                    <div className={theme === "dark" ? "c-name c-name-dark" : "c-name c-name-light"}>Khusbhu</div>
                    <div className={theme === "dark" ? "cert-links" : "cert-links"}>
                        <button className={theme === "dark" ? "view-btn view-btn-dark" : "view-btn view-btn-light"} onClick={() => { showCert("data-analysis"); changeShow("view") }}>view certificate</button>
                        <a href={da} download={"khubhu's data analysis certificate"} target='_blank' rel='noreferrer' className={theme === "dark" ? "cert-load cert-load-dark" : "cert-load cert-load-light"}><HiOutlineCloudDownload /></a>
                    </div>
                    <div className={theme === "dark" ? "issuer issuer-dark" : "issuer issuer-light"}>
                        data city
                    </div>
                </motion.div>
                <motion.div variants={cardVar} initial="start" animate={box2 ? "end" : "start"} transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 50 }}>
                    <h3 className={theme === "dark" ? "cert-h3 cert-h3-dark" : "cert-h3 cert-h3-light"}>mysql basic</h3>
                    <div className={theme === "dark" ? "cert-logo-div cert-logo-div-dark" : "cert-logo-div cert-logo-div-light"}>
                        <img src={hackerrankLogo} alt="" />
                    </div>
                    <div className={theme === "dark" ? "cert-digits cert-digits-dark" : "cert-digits cert-digits-light"} ref={b2}>
                        <span>0212</span>
                        <span>2022</span>
                        <span>1211</span>
                        <span>1999</span>
                    </div>
                    <div className={theme === "dark" ? "c-name c-name-dark" : "c-name c-name-light"}>Khusbhu</div>
                    <div className={theme === "dark" ? "cert-links" : "cert-links"}>
                        <button className={theme === "dark" ? "view-btn view-btn-dark" : "view-btn view-btn-light"} onClick={() => { showCert("mysql-basic"); changeShow("view") }}>view certificate</button>
                        <a href={sBase} download={"khubhu's mysql certificate(basic)"} target='_blank' rel='noreferrer' className={theme === "dark" ? "cert-load cert-load-dark" : "cert-load cert-load-light"}><HiOutlineCloudDownload /></a>
                    </div>
                    <div className={theme === "dark" ? "issuer issuer-dark" : "issuer issuer-light"}>
                        hacker rank
                    </div>
                </motion.div >
                <motion.div variants={cardVar} initial="start" animate={box3 ? "end" : "start"} transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 50 }}>
                    <h3 className={theme === "dark" ? "cert-h3 cert-h3-dark" : "cert-h3 cert-h3-light"}>mysql intermediate</h3>
                    <div className={theme === "dark" ? "cert-logo-div cert-logo-div-dark" : "cert-logo-div cert-logo-div-light"}>
                        <img src={hackerrankLogo} alt="" />
                    </div>
                    <div className={theme === "dark" ? "cert-digits cert-digits-dark" : "cert-digits cert-digits-light"} ref={b3}>
                        <span>0212</span>
                        <span>2022</span>
                        <span>1211</span>
                        <span>1999</span>
                    </div>
                    <div className={theme === "dark" ? "c-name c-name-dark" : "c-name c-name-light"}>Khusbhu</div>
                    <div className={theme === "dark" ? "cert-links" : "cert-links"}>
                        <button className={theme === "dark" ? "view-btn view-btn-dark" : "view-btn view-btn-light"} onClick={() => { showCert("mysql-inter"); changeShow("view") }}>view certificate</button>
                        <a href={sInter} download={"khubhu's mysql certificate(intermediate)"} target='_blank' rel='noreferrer' className={theme === "dark" ? "cert-load cert-load-dark" : "cert-load cert-load-light"}><HiOutlineCloudDownload /></a>
                    </div>
                    <div className={theme === "dark" ? "issuer issuer-dark" : "issuer issuer-light"}>
                        hacker rank
                    </div>
                </motion.div>
                <motion.div variants={cardVar} initial="start" animate={box4 ? "end" : "start"} transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 50 }}>
                    <h3 className={theme === "dark" ? "cert-h3 cert-h3-dark" : "cert-h3 cert-h3-light"}>mysql advanced</h3>
                    <div className={theme === "dark" ? "cert-logo-div cert-logo-div-dark" : "cert-logo-div cert-logo-div-light"}>
                        <img src={hackerrankLogo} alt="" />

                    </div>
                    <div className={theme === "dark" ? "cert-digits cert-digits-dark" : "cert-digits cert-digits-light"} ref={b4}>
                        <span>3004</span>
                        <span>2022</span>
                        <span>1211</span>
                        <span>1999</span>
                    </div>
                    <div className={theme === "dark" ? "c-name c-name-dark" : "c-name c-name-light"}>Khusbhu</div>
                    <div className={theme === "dark" ? "cert-links" : "cert-links"}>
                        <button className={theme === "dark" ? "view-btn view-btn-dark" : "view-btn view-btn-light"} onClick={() => { showCert("mysql-adv"); changeShow("view") }}>view certificate</button>
                        <a href={sAdv} download={"khubhu's mysql certificate (advanced)"} target='_blank' rel='noreferrer' className={theme === "dark" ? "cert-load cert-load-dark" : "cert-load cert-load-light"}><HiOutlineCloudDownload /></a>
                    </div>
                    <div className={theme === "dark" ? "issuer issuer-dark" : "issuer issuer-light"}>
                        hacker rank
                    </div>
                </motion.div>

            </div>

            <div className={show === "hide" ? "cert-viewer cert-viewer-hidden" : "cert-viewer cert-viewer-show"}>

                {
                    <div className={cert === "" ? "cert-hidden" : cert}>
                        <FaRegWindowClose onClick={() => changeShow("hide")} className='cert-close' />
                        {
                            
                           certImages.map((item)=>{
                            if(item.title===cert)
                            {
                                return(
                                    <img src={item.url} alt/>
                                )
                            }
                           })        
                           
                        }
                    </div>



                }
            </div>
        </section>
    )
}

export default Certs;