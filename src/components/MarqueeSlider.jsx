import React, { useContext, useEffect, useState, useRef } from 'react'
import "./marqueeslider.css"
import pythonImg from "../assets/marqee images/python-svgrepo-com.svg"
import aiLogo from "../assets/marqee images/ai-document-svgrepo-com.svg"
import mlLogo from "../assets/marqee images/machine-learning.png"
import mysqlLogo from "../assets/marqee images/mysql-logo-svgrepo-com.svg";
import postLogo from "../assets/marqee images/postgresql-logo-svgrepo-com.svg";
import tableuLogo from "../assets/marqee images/tableau-icon-svgrepo-com.svg";
import excelLogo from "../assets/marqee images/excel2-svgrepo-com.svg"
import oracleLogo from "../assets/marqee images/oracle-svgrepo-com.svg"
import tensorLogo from "../assets/marqee images/tensorflow-svgrepo-com.svg"
import numpyLogo from "../assets/marqee images/numpy-svgrepo-com.svg"
import { ThemeContext } from "../App"
import { motion } from "framer-motion";

import mobAi from "../assets/mob logos/ai-ai-svgrepo-com.svg"
import mobPy from "../assets/mob logos/python-svgrepo-com.svg"
import mobNum from "../assets/mob logos/numpy-svgrepo-com.svg"
import mobEx from "../assets/mob logos/excel2-svgrepo-com.svg"
import mobML from "../assets/mob logos/ai-platform-svgrepo-com.svg"
import mobSql from "../assets/mob logos/mysql-svgrepo-com.svg"
import mobPost from "../assets/mob logos/postgresql-svgrepo-com.svg"
import mobPanda from "../assets/mob logos/panda-bear-panda-svgrepo-com.svg";
import mobCpp from "../assets/mob logos/cpp-svgrepo-com.svg"
import mobTab from "../assets/mob logos/tableau-icon-svgrepo-com.svg"
import mobTensor from "../assets/mob logos/tensorflow-enterprise-svgrepo-com.svg"
import mobOracle from "../assets/mob logos/oracle-svgrepo-com.svg"

const imgData = [
    {
        id: 0,
        url: pythonImg,
        alt: ""
    },
    {
        id: 1,
        url: aiLogo,
        alt: ""
    },
    {
        id: 2,
        url: mlLogo,
        alt: ""
    },
    {
        id: 3,
        url: numpyLogo,
        alt: ""
    },
    {
        id: 4,
        url: tensorLogo,
        alt: ""
    },
    {
        id: 5,
        url: excelLogo,
        alt: ""
    },
    {
        id: 6,
        url: mysqlLogo,
        alt: ""
    },
    {
        id: 7,
        url: postLogo,
        alt: ""
    },
    {
        id: 8,
        url: oracleLogo,
        alt: ""
    },
    {
        id: 9,
        url: tableuLogo,
        alt: ""
    }
]

const tagData = ["python", "artificial intelligence", "machine learning", "mysql", "postgresql", "oracle", "excel", "numpy", "pandas", "tensorflow", "keras"]

const variant = {
    start: {
        x: "-100%",
        opacity:0
    },
    end: {
        x: 0,
        opacity:1
    }
}
const variant2 = {
    start: {
        x: "100%",
        opacity:0
    },
    end: {
        x: 0,
        opacity:1
    }
}
const mobileLogos = [mobPy, mobNum, mobPanda, mobAi, mobML, mobSql, mobPost, mobCpp, mobOracle, mobTensor, mobTab, mobEx]

const newMobLogos=[
    {
        id:0,
        url:mobPy,
        title:"python"
    },
    {
        id:1,url:mobNum,title:"numpy"
    },
    {id:2,url:mobPanda,title:"pandas"},
    {id:3,url:mobAi,title:"artificial intelligence"},
    {id:4,url:mobML,title:"machine learning"},
    {id:5,url:mobSql,title:'mysql'},
    {id:6,url:mobPost,title:"postgresql"}
]
const MarqueeSlider = () => {
    const theme = useContext(ThemeContext)
    const marqeeRef = useRef()
    const [inViewport, updateViewport] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            let entry = entries[0]
            entry.isIntersecting ? updateViewport(true) : updateViewport(false)
        })

        observer.observe(marqeeRef.current);
    }, [])
    return (
        <section className={theme === "dark" ? "marqee-dark" : "marqee-light"}>
            <h2 id="marqee-h2">DEVELOPEMENT TECHNOLOGY</h2>
            <motion.div className='mob-logo' variants={variant} initial="start" animate={inViewport ? "end" : "start"} transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 50 }}>
            {
                    mobileLogos.map((item,index)=>{
                        if(index<6)
                        {
                            return(
                                <div className={theme==="dark"?'mob-logo-div mob-logo-div-dark1':'mob-logo-div'}>
                                    <img src={item} alt=""  className="mob-logo-pic"/>
                                </div>
                            )
                        }
                        return "";
                    })
                }
            </motion.div>
            <div className={theme === "dark" ? "scroller-dark" : "scroller-light"}>
                <div className='taglist'>
                    {
                        tagData.map((item) => {
                            return (<p className={theme === "dark" ? "tag tag-dark" : "tag tag-light"}>{item}</p>)
                        })
                    }
                </div>
                <div className='taglist'>
                    {
                        tagData.map((item) => {
                            return (<p className={theme === "dark" ? "tag tag-dark" : "tag tag-light"}>{item}</p>)
                        })
                    }
                </div>
            </div>
            <h2 id="mobile-marqee-h2"  ref={marqeeRef} >DEVELOPEMENT TECHNOLOGY</h2>
            <div className={theme === "dark" ? 'logo-scroller logo-ghost-dark' : 'logo-scroller logo-ghost-light'}>
                <div className='logo-slide'>
                    {
                        imgData.map((pic) => {
                            return (
                                <div className={theme === "dark" ? 'logo-inner-div-dark' : 'logo-inner-div-light'}>
                                    <img src={pic.url} alt="" />
                                </div>

                            )
                        })
                    }
                </div>
                <div className='logo-slide'>
                    {
                        imgData.map((pic) => {
                            return (
                                <div className={theme === "dark" ? 'logo-inner-div-dark' : 'logo-inner-div-light'}>
                                    <img src={pic.url} alt="" />
                                </div>

                            )
                        })
                    }
                </div>
            </div>

            <motion.div className='mob-logo' variants={variant2} initial="start" animate={inViewport ? "end" : "start"} transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 50 }}>
                {
                    mobileLogos.map((item,index)=>{
                        if(index>=6)
                        {
                            return(
                                <div className={theme==="dark"?'mob-logo-div mob-logo-div-dark2':'mob-logo-div'}>
                                    <img src={item} alt="" className="mob-logo-pic"/>
                                </div>
                            )
                        }
                        return "";
                    })
                }
            
            </motion.div>
        </section>
    )
}

export default MarqueeSlider;