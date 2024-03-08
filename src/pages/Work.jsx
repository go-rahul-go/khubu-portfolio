import React, { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./work.css"
import { ThemeContext } from "../App"
import { IoCloseCircleOutline } from "react-icons/io5";


import retail from "../assets/project images/retail_pixian_ai.png"
import sales from "../assets/project images/sales_pixian_ai.png"
import hr from "../assets/project images/hr_pixian_ai.png"
import flight from "../assets/project images/flight.png"
import customer from "../assets/project images/customer_pixian_ai.png"
import pet from "../assets/work images/catdog.png"
import carsales from "../assets/work images/car-price.png"
import movies from "../assets/work images/cinema.png"

const imgData = [
  {
    id: 1, title: "retail analysis", url: retail,
    bio: "Retail analysis assesses sales, customer behavior, and market trends, guiding strategic decisions for inventory management, pricing, and customer experience optimization, ultimately enhancing overall business performance and profitability.",
    subtitle:"a machine learning project",
    link:"https://github.com/ikhushbusingh/Retail-Analysis"
  },
  {
    id: 2, title: "sales analysis", url: sales,
    bio: "Sales analysis involves the examination of sales data, customer behavior, and market trends to derive insights, optimize strategies, and enhance overall business performance for sustained growth and success.",
    subtitle:"a machine learning project",
    link:"https://github.com/ikhushbusingh/sales-analysis"
  },
  {
    id: 3, title: "hR analysis", url: hr,
    bio:"HR analysis scrutinizes workforce data, evaluating employee performance, engagement, and trends to optimize talent management, streamline processes, and foster a productive and healthy organizational culture for success.",
    subtitle:"a machine learning project",
    link:"https://github.com/ikhushbusingh/HR-Analysis"
  },
  {
    id: 4, title: "customer churn prediction", url: customer,
    bio: "Customer churn prediction, using data analysis and machine learning, anticipates customer departures, enabling businesses to implement proactive retention strategies and enhance overall customer satisfaction and loyalty.",
    subtitle:"a machine learning project",
    link:"https://github.com/ikhushbusingh"
  },
  {
    id: 5, title: "flight price prediction", url: flight,
    bio: "Flight price prediction, leveraging historical data and machine learning algorithms, anticipates future airfare trends, aiding travelers in making informed and cost-effective booking decisions for their journeys.",
    subtitle:"a machine learning project",
    link:"https://github.com/ikhushbusingh"
  },
  {
    id: 6, title: "car price prediction", url: carsales,
    bio: "Predicting car prices involves considering factors like brand reputation, model popularity, mileage, age, and market trends. Factors affecting depreciation, such as condition and features, play a crucial role in accurate predictions.",
    link:"https://github.com/ikhushbusingh"
  },
  {
    id: 7, title: "cat v/s dog classification", url: pet,
    bio: "Cat vs. dog image classification employs deep learning to distinguish between feline and canine visuals, enhancing computer vision accuracy.",
    subtitle:"a deep learning project",
    link:"https://github.com/ikhushbusingh"
  },
  {
    id: 8, title: "movie recommendation system", url: movies,
    bio:"A personalized movie recommendation system analyzes user preferences to suggest relevant films, enhancing user's viewing experience.",
    subtitle:"a machine learning project",
    link:"https://github.com/ikhushbusingh"
  }
]

function Work() {
  const theme = useContext(ThemeContext)
  const [selectedID, changeID] = useState(null)
  const [visiblie, changeVis] = useState("none")


  return (
    <section className={theme === "dark" ? "main main-dark" : "main main-light"}>

      <div className="box">
        {
          imgData.map((item) => {
            return (
              <motion.div layoutId={item.id} onClick={() => { changeID(item.id); changeVis("flex") }} className={theme === "dark" ? "inner-box inner-box-dark" : "inner-box inner-box-light"}>
                <motion.div className={theme === "dark" ? "img-shadow is-dark" : "img-shadow is-light"}></motion.div>
                <motion.h2 className={theme === "dark" ? "inner-h2 inner-h2-dark" : "inner-h2 inner-h2-light"}>{item.title}</motion.h2>
                <motion.div className={theme === "dark" ? "skeleton s-dark" : "skeleton s-light"}>
                  <motion.div></motion.div>
                  <motion.div></motion.div>
                  <motion.div></motion.div>
                </motion.div>
              </motion.div>
            )
          })
        }
      </div>
      <h2 className="main-h2">tap on the card to view</h2>

      <AnimatePresence>
        <div className="blur" style={{ display: visiblie }}>
          {

            selectedID && (
              <motion.div layoutId={selectedID} className={theme === "dark" ? "pop-box pop-box-dark" : "pop-box pop-box-light"}>


                <IoCloseCircleOutline className="pop-up-close" onClick={() => { changeID(null); changeVis("none") }} title="close this" />
                <motion.div className={theme === "dark" ? "pop-img-box pib-dark" : "pop-img-box"}>
                  <img src={imgData[selectedID - 1].url} alt="" />
                  <p className={theme === "dark" ? "card-num card-num-dark" : "card-num card-num-light"}>{imgData[selectedID - 1].id}</p>
                </motion.div>

                <motion.div className="pop-up-details">
                  <motion.h2 className={theme==="dark"?"pop-up-title pop-up-title-dark":"pop-up-title pop-up-title-light"}>{imgData[selectedID - 1].title}</motion.h2>
                  <motion.h3 className="pop-up-sub">{imgData[selectedID-1].subtitle}</motion.h3>
                  <motion.p className="pop-up-bio">{imgData[selectedID-1].bio}</motion.p>
                  <div className={theme==="dark"?"git-link git-link-dark":"git-link git-link-light"}>
                   <a href={imgData[selectedID-1].link} target="_blank" rel="noreferrer"> visit github</a>
                  </div>
                </motion.div>

              </motion.div>
            )

          }

        </div>
      </AnimatePresence>
    </section>

  )
}

export default Work;
