import React from 'react'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3 leading-[30px]'
      >
        I'm a software commissioning engineer with experience in software testing and full 
        stack development. Alongside development work I also have experience in data science 
        and maintaining IT systems. I've always had a passion for coding and seeing what's on 
        the cutting edge of technology, which is exactly why I majored in computer science. 
        Outside of tech I'm interested in building guitars and martial arts (Judo and Kendo).
        Keep scrolling to view my experience and what projects I've worked on. Below are some 
        of the languages and technologies that I'm familiar with.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");