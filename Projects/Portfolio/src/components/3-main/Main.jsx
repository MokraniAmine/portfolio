import "./main.css";
import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from 'motion/react';
const myProjects = [
  {
    projectTitle: "Travel Agency WebSite",
    description:"Explore the World with Us! Your dream vacation is just a click away",
    category: "Full Stack Projects" ,
    imgPath: "./images/travel.jpg",
  },
  {
    projectTitle: "Portfolio",
    description:"Crafting Digital Experiences That Shine ✨ . Let’s turn your ideas into stunning online realities! 🚀",
    category: "Full Stack Projects",
    imgPath: "./images/portfolio.jpg",
  },
  {
    projectTitle: "Padre Food",
    description:"Explore delicious recipes, restaurant reviews. Let’s make every meal an unforgettable experience! 🍕🍰",
    category: "Front End Projects",
    imgPath: "./images/food.jpg",
  },
  {
    projectTitle: "Azure Cloud ",
    description:"Stay tuned as I develop a powerful platform to simplify and optimize your cloud journey. Exciting things are coming soon! 🚀",
    category: "Back End Projects",
    imgPath: "./images/Azure.jpeg",
  },
  {
    projectTitle: "Car Rent",
    description:"Your Journey Starts Here! 🚗✨ Find the perfect ride for every adventure with our  car rental service",
    category: "Back End Projects",
    imgPath: "./images/car .jpg",
  },
];
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  return (
    <main className="flex">
      <section className=" flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects)
            
          }}
          className={currentActive === "all" ? "active" : null}
        >
          Projects
        </button>


        <button
          onClick={() => {
            setcurrentActive("Full Stack Projects");
            const newArr = myProjects.filter((item) =>{
              return item.category === "Full Stack Projects"
            })
            setArr(newArr);
          }}
          className={currentActive === "Full Stack Projects" ? "active" : null}
        >
          Full Stack Projects
        </button>



        <button
          onClick={() => {
            setcurrentActive("Front End Projects");
            const newArr = myProjects.filter((item) =>{
              return item.category === "Front End Projects"
            })
            setArr(newArr);
          }}
          className={currentActive === "Front End Projects" ? "active" : null}
        >
          Front End Projects{" "}
        </button>



        <button
          onClick={() => {
            setcurrentActive("Back End Projects");
            const newArr = myProjects.filter((item) =>{
              return item.category === "Back End Projects"
            })
            setArr(newArr);
          }}
          className={currentActive === "Back End Projects" ? "active" : null}
        >
          Back End Projects
        </button>


      </section>

      <section className="right-section flex">
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
            layout
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{type:"spring", damping:8 ,stiffness:50}}
            key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.description}
                </p>

                <div className="flex icons">
                  <div style={{ gap: "12px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    description
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
