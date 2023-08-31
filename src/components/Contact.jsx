import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github2 } from "../assets";
import { gmail } from "../assets";
import { LinkedIn } from "../assets";
import { Handshake } from "../assets";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h>If you're looking for a passionate and well-rounded developer, I'd be the perfect fit for your team! 
          Click any of the following links to add me on the respective platform. If you spotted a bug in my website 
          or think a feature would make it more useable, feel free to send me an email!</h>
        <div className="mt-8 flex flex-col gap-6">
          
          <div className="flex gap-4 items-center w-10 h-10">
            <img src={gmail} alt="Email" />
            <a href="mailto:slee20606@gmail.com" className="text-white font-medium">slee20606@gmail.com</a> 
          </div>

          <div className="flex gap-4 items-center w-10 h-10">
            <img src={github2} alt="GitHub" />
            <a href="https://github.com/ItsMeeSeanLee337" className="text-white font-medium">GitHub</a>
          </div>

          <div className="flex gap-4 items-center w-10 h-10">
            <img src={LinkedIn} alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/sean-lee-853854222/" className="text-white font-medium">LinkedIn</a>
          </div>

          <div className="flex gap-4 items-center w-10 h-10">
            <img src={Handshake} alt="Handshake" />
            <a href="https://app.joinhandshake.com/stu/users/27979540" className="text-white font-medium">Handshake</a>  
          </div>

        </div>
      </motion.div>

      
      
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");