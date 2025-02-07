import "./hero.css";
import Lottie from "lottie-react";
import AnimationMain from '../../../public/animation/AnimationMain.json';
import {useRef} from "react";
import { motion } from "motion/react";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">

        <div className="parent-avatar flex">
            <motion.img
             initial={{transform:"scale(0)"}}
             animate={{transform:"scale(1.2)"}}
             transition={{damping:7,type:"spring",stiffness:99}}
             src="./brand.png" className="avatar" alt=""  loading="lazy"/>
            <div className="icon-verified"></div>
        </div>
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}} 
        className="title">Front-end Developer && web designer</motion.h1>
        <p className="sub-title">
        Hi there 👋 I'm Amine.
        I'm a passionate front-end developer with a love for crafting beautiful, user-friendly, and responsive websites. 
        I thrive on turning ideas into reality through clean, efficient code and creative design. 
        </p>
        <div className="all-icons flex">
            <div className="icon-1 icon-github"></div>
            <div className="icon-2 icon-linkedin"></div>
            <div className="icon-3 icon-outgoing_mail"></div>
            <div className="icon-4 icon-instagram"></div>
        </div>
      </div>

      <div className="right-section animation ">
      <Lottie 
            lottieRef={lottieRef}
            loop={true}
            onLoadedImages={() => {
              //@ts-ignore
              lottieRef.current.setSpeed(1.5);
            }}
            animationData={AnimationMain}
          />
      </div>
    </section>
  );
};

export default Hero;
