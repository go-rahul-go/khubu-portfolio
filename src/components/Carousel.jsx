import React, { useContext,useEffect,useRef,useState } from 'react'
import { ThemeContext } from "../App";
import "./carousel.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";
import { HiMiniArrowSmallRight, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import retail from "../assets/project images/retail_pixian_ai.png"
import sales from "../assets/project images/sales_pixian_ai.png"
import customer from "../assets/project images/customer_pixian_ai.png"
import hr from "../assets/project images/hr_pixian_ai.png"
import flight from "../assets/project images/flight.png"
import pyLogo from "../assets/mob logos/python-svgrepo-com.svg"
import aiLogo from "../assets/mob logos/ai-platform-svgrepo-com.svg"
import tensorLogo from "../assets/mob logos/tensorflow-enterprise-svgrepo-com.svg"
import mysqlLogo from "../assets/mob logos/mysql-svgrepo-com.svg"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import {motion} from "framer-motion"
import { FaArrowRight } from "react-icons/fa";
import movie from "../assets/work images/cinema.png"
import catDog from "../assets/work images/catdog.png"
import car from "../assets/work images/car-price.png"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="right-arrow arrows"


      onClick={onClick} title="next slide"
    >
      <HiOutlineArrowSmallRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="left-arrow arrows"

      onClick={onClick} title="previous slide"
    >
      <HiOutlineArrowSmallLeft />
    </div>
  );
}

let cardInfo = [
  {
    id: 0,
    title: "retail analysis",
    url: retail,
    intro: "Retail analysis assesses sales, trends, and customer behavior, guiding strategies for optimal inventory, pricing, and overall business success.",
    link:"https://github.com/ikhushbusingh/Retail-Analysis"
  },
  {
    id: 1,
    title: "sales analysis",
    url: sales,
    intro: "Sales analysis scrutinizes performance data to evaluate trends, identify opportunities, and enhance strategies, driving revenue growth and efficiency.",
    link:"https://github.com/ikhushbusingh/sales-analysis"
  },
  {
    id: 2,
    title: "customer churn prediction",
    url: customer,
    intro: "Customer churn prediction uses data analytics to forecast and prevent customer attrition, aiding businesses in retention strategies for sustained growth.",
    link:"https://github.com/ikhushbusingh"
  },
  {
    id: 3,
    title: "flight ticket prediction",
    url: flight,
    intro: "Flight ticket prediction anticipates pricing fluctuations, enabling travelers to make informed decisions and secure cost-effective airfare for their journeys.",
    link:"https://github.com/ikhushbusingh"
  },
  {
    id: 4,
    title: "HR analysis",
    url: hr,
    intro: "HR analysis evaluates workforce data, gauging employee performance, satisfaction, and trends to optimize recruitment and organizational effectiveness.",
    link:"https://github.com/ikhushbusingh/HR-Analysis"
  },
  {
    id: 5,
    title: "car price prediction",
    url: car,
    intro: "Car price prediction utilizes machine learning models to analyze variables, providing accurate estimates for potential buyers and sellers.",
    link:"https://github.com/ikhushbusingh"
  },
  {
    id: 6,
    title: "cat v/s dog classification",
    url: catDog,
    intro: "Cat vs. dog image classification employs deep learning to distinguish between feline and canine visuals, enhancing computer vision accuracy.",
    link:"https://github.com/ikhushbusingh"
  },
  {
    id: 7,
    title: "movie recommendation system",
    url: movie,
    intro: "A personalized movie recommendation system analyzes user preferences to suggest relevant films, enhancing user's viewing experience.",
    link:"https://github.com/ikhushbusingh/Netflix"
  }
]


let emptyArr = [1, 2, 3, 4, 5]
let anotherStars = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]

const titleVariant={
  start:{
    x:"-100%"
  },
  end:{
    x:0
  }
}
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    customPaging: function () {
      return (
        <a className='dot-link'>
          <GoDotFill />
        </a>
      )
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]

  };
  const theme = useContext(ThemeContext)
  const [compVisibility,updateCompVisibility]=useState(false)
  const carouselRef=useRef();

  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      let entry1=entries[0]
     
      entry1.isIntersecting?updateCompVisibility(true):updateCompVisibility(false)
    })
    observer.observe(carouselRef.current)
  },[])
  return (
    <section className={theme === "dark" ? "carousel-section-dark" : "carousel-section-light"} ref={carouselRef}>
      <motion.h2 className='carousel-title'  initial={{x:"-100%",opacity:0}} animate={compVisibility?{x:0,opacity:1}:{x:"-100%",opacity:0}} transition={{duration:0.6,delay:0.2,type:"spring",stiffness:70}} id="projects">My Work</motion.h2>
      <div className='carousel'>

        <Slider {...settings} className='project-slider' >

          {
            cardInfo.map((item) => {
              return (
                <div className='project-card' >
                  <a className='inner-card' href={item.link} target="_blank" rel="noreferrer">
                    <div className={theme === "dark" ? "card-img-box card-img-box-dark" : "card-img-box card-img-box-light"}>
                      <img src={item.url} className='project-img' alt="" />
                      <h3 className={theme === "dark" ? "project-title project-title-dark" : "project-title"}>{item.title}</h3>
                      <div className={theme === "dark" ? "stars stars-black" : "stars stars-light"}>
                        {
                          item.title === "retail analysis" ? emptyArr.map((item) => { return <FaStar /> }) : anotherStars.map((item) => { return (item) })
                        }
                      </div>
                    </div>
                    <div className='project-intro-box'>
                      <p className={theme === "dark" ? "project-intro project-intro-dark" : "project-intro"}>{item.intro}</p>
                    </div>
                    <div className="dev-logo-box">
                      <div className={theme === "dark" ? "dev-logo dev-logo-dark" : "dev-logo dev-logo-light"}>
                        <img src={pyLogo} alt="" />
                      </div>
                      <div className={theme === "dark" ? "dev-logo dev-logo-dark" : "dev-logo dev-logo-light"}>
                        <img src={aiLogo} alt="" />
                      </div>
                      <div className={theme === "dark" ? "dev-logo dev-logo-dark" : "dev-logo dev-logo-light"}>
                        <img src={tensorLogo} alt="" />
                      </div>
                      <div className={theme === "dark" ? "dev-logo dev-logo-dark" : "dev-logo dev-logo-light"}>
                        <img src={mysqlLogo} alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              )
            })
          }

        </Slider>
      </div>
    </section>
  )
}

export default Carousel