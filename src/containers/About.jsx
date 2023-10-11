import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
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
            About
          </p>
          <img src={Leaf2} className="w-4 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/*main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*image section*/}
        <div className="w-full flex items-center justify-center px-8">
          <div
            className="w-full md:w-72 p-[2px] rounded-md 
          bg-gradient-to-br from-primary to-secondary relative"
          >
            <img
              src={about}
              alt=""
              className="w-full rounded-md h-auto object-contain"
            />
            <div
              className="absolute w-full h-full -top-3 -left-2 
            bg-gradient-to-br from-primary to-secondary rounded-sm blur-[5px] -z-10"
            ></div>
          </div>
        </div>
        {/*content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
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
      </div>
    </section>
  );
};

export default About;
