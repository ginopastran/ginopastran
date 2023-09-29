import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const TechCard = ({ name, icon }) => {
  return (
    <Tilt className="xs:w-[120px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" bg-tertiary rounded-[20px] p-4 min-h-[100px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className=" w-20 h-20 object-contain " />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className=" mt-20 flex flex-wrap gap-10">
        {technologies.map((technology) => (
          <TechCard key={technology.name} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
