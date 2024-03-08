import React, { useContext, useState, useEffect, useRef } from 'react'
import { ThemeContext } from "../App"
import "./education.css"
import girlImg from "../assets/girl.png"
import { motion } from "framer-motion"
import school1 from "../assets/edu icons/school-svgrepo-com.svg"
import school2 from "../assets/edu icons/school-svgrepo-com (1).svg"
import college1 from "../assets/edu icons/university-svgrepo-com (1).svg"
import college2 from "../assets/edu icons/university-svgrepo-com.svg"
const headingVariant = {
    start: {
        x: "-100%"
    },
    end: {
        x: 0
    }
}
const imgVariant = {
    start: {
        x: "200%",
        rotate: "180deg",
        opacity: 0
    },
    end: {
        x: 0,
        rotate: "0deg",
        opacity: 1
    }
}

const schoolVariant = {
    start: {
        x: "-150%"
    },
    end: {
        x: 0
    }
}
const collegeVariant = {
    start: {
        x: "150%",
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1
    }
}

const schoolData = [
    {
        id: 1,
        url: school1,
        title: "guru harkrishan public school",
        board: "cbse",
        class: "10th standard",
        city: "delhi"
    },
    {
        id: 2,
        url: school2,
        title: "guru harkrishan public school",
        board: "cbse",
        class: "12th standard",
        city: "delhi"
    }
]
const collegeData = [
    {
        id: 1,
        url: college1,
        title: "K.L mehta dayanand college",
        university: "maharishi dayanand university",
        course: "b.sc",
        city: "faridabad"
    },
    {
        id: 2,
        url: college2,
        title: "institute of management & technology",
        university: "maharishi dayanand university",
        course: "m.c.a",
        city: "faridabad"
    }
]

const Education = () => {
    const theme = useContext(ThemeContext);
    const [inViewPort, changeViewPort] = useState(false)
    const eduRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            let entry1 = entries[0]
            entry1.isIntersecting ? changeViewPort(true) : changeViewPort(false)
        })
        observer.observe(eduRef.current);
    }, [])
    return (
        <section className={theme === "dark" ? "education education-dark" : "education education-light"}>
            <motion.h2 className='edu-title' variants={headingVariant} initial="start" animate={inViewPort ? "end" : "start"} transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 60 }}>Education</motion.h2>

            <div className='edu-section'>
                <motion.div className={theme === "dark" ? "school school-dark" : "school school-light"} variants={schoolVariant} initial="start" animate={inViewPort ? "end" : "start"} transition={{ duration: 0.6, delay: 0.3 }}>
                    <h2>school</h2>

                    {
                        schoolData.map((item) => {
                            return (
                                <div className={theme === "dark" ? 'school-details' : 'school-details school-details-light'}>
                                    <div className="school-icon">
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className="school-name">
                                        <h4 className="ins-title">{item.title}</h4>
                                        <p className="course">{item.class}</p>
                                        <p className="university">{item.board}</p>
                                        <p className='city'>{item.city}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </motion.div>
                <div ref={eduRef}></div>
                <motion.div className={theme === "dark" ? "edu-img edu-img-dark" : "edu-img edu-img-light"} variants={imgVariant} initial="start" animate={inViewPort ? "end" : "start"} transition={{ duration: 0.9 }} >
                    <img src={girlImg} alt="" />
                </motion.div>
                <div></div>
                <motion.div className={theme === "dark" ? "college college-dark" : "college college-light"} variants={collegeVariant} initial="start" animate={inViewPort ? "end" : "start"} transition={{ duration: 0.6, delay: 0.3 }}>
                    <h2>college</h2>
                    {
                        collegeData.map((item) => {
                            return (
                              
                                <div className={theme === "dark" ? 'college-details' : 'college-details college-details-light'}>
                                    <div className="school-icon">
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className="school-name">
                                        <h4 className="ins-title">{item.title}</h4>
                                        <p className="course">{item.course}</p>
                                        <p className="university">{item.university}</p>
                                        <p className='city'>{item.city}</p>
                                    </div>
                                </div>
                                
                            )
                        })
                        
                    }
                    
                    
                </motion.div>
            </div>

        </section>
    )
}

export default Education;