import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col gap-6 relative my-12"
    >
      {/*title*/}
      <div className="w-full flex items-center justify-center py-16 md:py-24 text-white">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-4 h-auto object-contain" alt="" />
          <p
            className="text-transparent bg-clip-text 
          bg-gradient-to-r from-primary to-secondary"
          >
            Skills
          </p>
          <img src={Leaf2} className="w-4 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/*main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p
            className="text-transparent bg-clip-text 
          bg-gradient-to-r from-primary to-secondary"
          >
            My Skills and Qualification
          </p>
          <p className="text-texlight text-xs md:text-sm tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            omnis totam debitis, quidem doloremque nisi porro beatae dolorem
            perspiciatis, autem natus assumenda! Fugiat, quidem alias tempore
            praesentium veritatis rem eveniet.
          </p>
          <p className="text-texlight text-xs md:text-sm tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            omnis totam debitis, quidem doloremque nisi porro beatae dolorem
            perspiciatis, autem natus assumenda! Fugiat, quidem alias tempore
            praesentium veritatis rem eveniet.
          </p>
          <p className="text-texlight text-xs md:text-sm tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            omnis totam debitis, quidem doloremque nisi porro beatae dolorem
            perspiciatis, autem natus assumenda! Fugiat, quidem alias tempore
            praesentium veritatis rem eveniet.
          </p>
        </div>

        {/*image section*/}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard skill={"HTML"} percentage={"95%"} color={"#FC4F13"} move={true} />
          <SkillCard skill={"CSS"} percentage={"75%"} color={"#306AF1"} move={false} />
          <SkillCard skill={"JavaScript"} percentage={"65%"} color={"#F7E025"} move={true} />
          <SkillCard skill={"Bootstrap"} percentage={"60%"} color={"#8C19FE"} move={false} />
          <SkillCard skill={"Tailwind CSS"} percentage={"75%"} color={"#3EBFF8"} move={true} />
          <SkillCard skill={"ReactJs"} percentage={"70%"} color={"#09BEFE"} move={false} />
          <SkillCard skill={"Material UI"} percentage={"63%"} color={"#0883FF"} move={true} />
          <SkillCard skill={"Framer Motion"} percentage={"45%"} color={"#F009BB"} move={false} />
          <SkillCard skill={"Firebase"} percentage={"80%"} color={"#FFCD35"} move={true} />
          <SkillCard skill={"Git"} percentage={"50%"} color={"#F05639"} move={false} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
